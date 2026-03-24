#!/usr/bin/env python3
"""
Generate "The Job Search Accelerator" PDF lead magnet.
Professional amber/brown color scheme.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus.flowables import Flowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# ── Color Palette ─────────────────────────────────────────────────────────────
AMBER_DARK   = colors.HexColor("#7C4B00")   # deep brown
AMBER_MID    = colors.HexColor("#B36A00")   # rich amber
AMBER_LIGHT  = colors.HexColor("#F4A836")   # warm gold
CREAM        = colors.HexColor("#FDF6EC")   # warm off-white
CREAM_DARK   = colors.HexColor("#F5E8D0")   # card background
WHITE        = colors.white
TEXT_DARK    = colors.HexColor("#1A1A1A")
TEXT_BODY    = colors.HexColor("#3D2B00")
TEXT_MUTED   = colors.HexColor("#7A6650")

PAGE_W, PAGE_H = letter


# ── Custom Flowables ──────────────────────────────────────────────────────────

class ColoredBox(Flowable):
    """Full-width filled rectangle with optional top border."""
    def __init__(self, height, fill_color, border_color=None, border_w=0):
        Flowable.__init__(self)
        self.box_height = height
        self.fill_color = fill_color
        self.border_color = border_color
        self.border_w = border_w

    def wrap(self, aW, aH):
        self.width = aW
        return aW, self.box_height

    def draw(self):
        c = self.canv
        c.setFillColor(self.fill_color)
        c.rect(0, 0, self.width, self.box_height, fill=1, stroke=0)
        if self.border_color and self.border_w:
            c.setStrokeColor(self.border_color)
            c.setLineWidth(self.border_w)
            c.line(0, self.box_height, self.width, self.box_height)


class NumberedItem(Flowable):
    """Circle-numbered list item."""
    def __init__(self, number, text, style, circle_color=AMBER_MID, text_color=TEXT_DARK):
        Flowable.__init__(self)
        self.number = str(number)
        self.text = text
        self.style = style
        self.circle_color = circle_color
        self.text_color = text_color
        self._para = Paragraph(text, style)

    def wrap(self, aW, aH):
        self.width = aW
        CIRCLE_D = 22
        self._para_w, self._para_h = self._para.wrap(aW - CIRCLE_D - 12, aH)
        self.height = max(CIRCLE_D, self._para_h) + 6
        return aW, self.height

    def draw(self):
        c = self.canv
        CIRCLE_D = 22
        # Draw circle
        cx = CIRCLE_D / 2
        cy = self.height - CIRCLE_D / 2 - 2
        c.setFillColor(self.circle_color)
        c.circle(cx, cy, CIRCLE_D / 2, fill=1, stroke=0)
        # Number
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(cx, cy - 3.5, self.number)
        # Para
        self._para.drawOn(c, CIRCLE_D + 12, self.height - self._para_h - 2)


class ChecklistItem(Flowable):
    """Checkbox + text item."""
    def __init__(self, text, style, done=False):
        Flowable.__init__(self)
        self.text = text
        self.style = style
        self.done = done
        self._para = Paragraph(text, style)

    def wrap(self, aW, aH):
        self.width = aW
        self._para_w, self._para_h = self._para.wrap(aW - 26, aH)
        self.height = max(16, self._para_h) + 5
        return aW, self.height

    def draw(self):
        c = self.canv
        BOX = 13
        by = self.height - BOX - 2
        c.setStrokeColor(AMBER_MID)
        c.setLineWidth(1.5)
        c.roundRect(0, by, BOX, BOX, 2, fill=0, stroke=1)
        if self.done:
            c.setFillColor(AMBER_MID)
            c.roundRect(0, by, BOX, BOX, 2, fill=1, stroke=0)
            c.setStrokeColor(WHITE)
            c.setLineWidth(1.8)
            c.line(2, by + 6, 5, by + 3)
            c.line(5, by + 3, 11, by + 9)
        self._para.drawOn(c, 22, self.height - self._para_h - 2)


# ── Style Factory ─────────────────────────────────────────────────────────────

def make_styles():
    base = getSampleStyleSheet()

    def S(name, **kw):
        s = ParagraphStyle(name, **kw)
        return s

    cover_title = S("CoverTitle",
        fontSize=36, leading=44, textColor=WHITE,
        fontName="Helvetica-Bold", alignment=TA_CENTER,
        spaceAfter=10)

    cover_sub = S("CoverSub",
        fontSize=16, leading=22, textColor=CREAM,
        fontName="Helvetica", alignment=TA_CENTER,
        spaceAfter=8)

    cover_tag = S("CoverTag",
        fontSize=12, leading=16, textColor=AMBER_LIGHT,
        fontName="Helvetica-BoldOblique", alignment=TA_CENTER)

    section_label = S("SectionLabel",
        fontSize=9, leading=12, textColor=AMBER_MID,
        fontName="Helvetica-Bold", spaceAfter=2,
        spaceBefore=0, letterSpacing=2)

    page_title = S("PageTitle",
        fontSize=24, leading=30, textColor=AMBER_DARK,
        fontName="Helvetica-Bold", spaceAfter=4, spaceBefore=6)

    h2 = S("H2",
        fontSize=14, leading=18, textColor=AMBER_DARK,
        fontName="Helvetica-Bold", spaceAfter=4, spaceBefore=10)

    h3 = S("H3",
        fontSize=11, leading=15, textColor=AMBER_MID,
        fontName="Helvetica-Bold", spaceAfter=3, spaceBefore=6)

    body = S("Body",
        fontSize=10, leading=15, textColor=TEXT_BODY,
        fontName="Helvetica", spaceAfter=4, alignment=TA_JUSTIFY)

    body_sm = S("BodySm",
        fontSize=9, leading=13, textColor=TEXT_BODY,
        fontName="Helvetica", spaceAfter=3)

    bullet = S("Bullet",
        fontSize=10, leading=14, textColor=TEXT_BODY,
        fontName="Helvetica", spaceAfter=3, leftIndent=12,
        bulletIndent=0)

    bold_body = S("BoldBody",
        fontSize=10, leading=14, textColor=AMBER_DARK,
        fontName="Helvetica-Bold", spaceAfter=2)

    script_q = S("ScriptQ",
        fontSize=10, leading=14, textColor=TEXT_MUTED,
        fontName="Helvetica-Oblique", spaceAfter=2)

    script_a = S("ScriptA",
        fontSize=10, leading=14, textColor=TEXT_DARK,
        fontName="Helvetica", spaceAfter=8, leftIndent=10)

    cta_title = S("CtaTitle",
        fontSize=26, leading=32, textColor=WHITE,
        fontName="Helvetica-Bold", alignment=TA_CENTER, spaceAfter=8)

    cta_body = S("CtaBody",
        fontSize=12, leading=18, textColor=CREAM,
        fontName="Helvetica", alignment=TA_CENTER, spaceAfter=6)

    cta_url = S("CtaUrl",
        fontSize=16, leading=22, textColor=AMBER_LIGHT,
        fontName="Helvetica-Bold", alignment=TA_CENTER)

    tip_body = S("TipBody",
        fontSize=9, leading=13, textColor=AMBER_DARK,
        fontName="Helvetica-Oblique", spaceAfter=0)

    return dict(
        cover_title=cover_title, cover_sub=cover_sub, cover_tag=cover_tag,
        section_label=section_label, page_title=page_title,
        h2=h2, h3=h3, body=body, body_sm=body_sm,
        bullet=bullet, bold_body=bold_body,
        script_q=script_q, script_a=script_a,
        cta_title=cta_title, cta_body=cta_body, cta_url=cta_url,
        tip_body=tip_body,
    )


# ── Page Background Canvas ────────────────────────────────────────────────────

def page_bg(canvas, doc):
    """Draw cream background + amber top bar + page number."""
    canvas.saveState()
    # Full background
    canvas.setFillColor(CREAM)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Top bar
    canvas.setFillColor(AMBER_DARK)
    canvas.rect(0, PAGE_H - 14, PAGE_W, 14, fill=1, stroke=0)
    # Brand text in top bar
    canvas.setFillColor(AMBER_LIGHT)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(0.5 * inch, PAGE_H - 10, "HOWTOFINDAJOB.ORG")
    canvas.drawRightString(PAGE_W - 0.5 * inch, PAGE_H - 10,
                           "The Job Search Accelerator")
    # Bottom bar
    canvas.setFillColor(AMBER_DARK)
    canvas.rect(0, 0, PAGE_W, 22, fill=1, stroke=0)
    # Page number
    canvas.setFillColor(AMBER_LIGHT)
    canvas.setFont("Helvetica", 8)
    page_num = canvas.getPageNumber()
    canvas.drawCentredString(PAGE_W / 2, 7, f"Page {page_num}")
    canvas.restoreState()


def cover_bg(canvas, doc):
    """Full amber gradient cover background."""
    canvas.saveState()
    # Deep amber background
    canvas.setFillColor(AMBER_DARK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Large decorative circle top-right
    canvas.setFillColor(AMBER_MID)
    canvas.circle(PAGE_W - 0.5 * inch, PAGE_H + 0.2 * inch, 2.8 * inch, fill=1, stroke=0)
    # Smaller accent circle bottom-left
    canvas.setFillColor(colors.HexColor("#A05C00"))
    canvas.circle(0.3 * inch, 0.3 * inch, 1.6 * inch, fill=1, stroke=0)
    # Thin gold accent line
    canvas.setStrokeColor(AMBER_LIGHT)
    canvas.setLineWidth(2)
    canvas.line(0.5 * inch, PAGE_H * 0.38, PAGE_W - 0.5 * inch, PAGE_H * 0.38)
    canvas.restoreState()


# ── Helpers ───────────────────────────────────────────────────────────────────

def divider(color=AMBER_LIGHT, w=1.5):
    return HRFlowable(width="100%", thickness=w, color=color,
                      spaceAfter=6, spaceBefore=6)


def tip_box(text, st):
    """Amber-tinted tip box."""
    data = [[Paragraph(f"<b>Pro Tip:</b> {text}", st["tip_body"])]]
    t = Table(data, colWidths=["100%"])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FEE9C0")),
        ("LEFTPADDING",  (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING",   (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 7),
        ("LINEAFTER",    (0, 0), (0, -1), 3, AMBER_MID),
        ("BOX",          (0, 0), (-1, -1), 0.5, AMBER_LIGHT),
        ("ROUNDEDCORNERS", [4]),
    ]))
    return t


def section_header(label, title, st):
    return [
        Paragraph(label.upper(), st["section_label"]),
        Paragraph(title, st["page_title"]),
        divider(),
    ]


def card(rows_data, col_widths, header_bg=AMBER_DARK, header_fg=WHITE):
    """Styled table card."""
    t = Table(rows_data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, 0), header_bg),
        ("TEXTCOLOR",    (0, 0), (-1, 0), header_fg),
        ("FONTNAME",     (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE",     (0, 0), (-1, 0), 10),
        ("BACKGROUND",   (0, 1), (-1, -1), CREAM_DARK),
        ("FONTNAME",     (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE",     (0, 1), (-1, -1), 9),
        ("TEXTCOLOR",    (0, 1), (-1, -1), TEXT_BODY),
        ("GRID",         (0, 0), (-1, -1), 0.5, colors.HexColor("#D4A96A")),
        ("LEFTPADDING",  (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING",   (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 6),
        ("VALIGN",       (0, 0), (-1, -1), "TOP"),
    ]))
    return t


# ── Page Builders ─────────────────────────────────────────────────────────────

def build_cover(st):
    story = []
    # Push content down to vertical center
    story.append(Spacer(1, 1.8 * inch))
    story.append(Paragraph("THE", st["cover_tag"]))
    story.append(Spacer(1, 0.1 * inch))
    story.append(Paragraph("Job Search<br/>Accelerator", st["cover_title"]))
    story.append(Spacer(1, 0.25 * inch))
    story.append(Paragraph(
        "Resume Template &bull; Interview Framework &bull; Negotiation Scripts",
        st["cover_sub"]))
    story.append(Spacer(1, 0.4 * inch))

    # Divider line visual
    line_data = [[""]]
    line_t = Table(line_data, colWidths=[4 * inch])
    line_t.setStyle(TableStyle([
        ("LINEABOVE", (0, 0), (-1, -1), 1.5, AMBER_LIGHT),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(line_t)
    story.append(Spacer(1, 0.3 * inch))

    story.append(Paragraph(
        "Everything you need to land your next job — faster.",
        st["cover_sub"]))
    story.append(Spacer(1, 0.5 * inch))
    story.append(Paragraph("howtofindajob.org", st["cover_tag"]))

    # Bottom badge
    story.append(Spacer(1, 1.2 * inch))
    badge_data = [["FREE CAREER RESOURCE  |  6 PROVEN FRAMEWORKS  |  INSTANT RESULTS"]]
    badge_t = Table(badge_data, colWidths=[5.5 * inch])
    badge_t.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), AMBER_LIGHT),
        ("TEXTCOLOR",    (0, 0), (-1, -1), AMBER_DARK),
        ("FONTNAME",     (0, 0), (-1, -1), "Helvetica-Bold"),
        ("FONTSIZE",     (0, 0), (-1, -1), 8),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
        ("TOPPADDING",   (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 7),
        ("LEFTPADDING",  (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
    ]))
    story.append(badge_t)
    return story


def build_resume(st):
    story = []
    story += section_header("Page 1", "Resume Structure Template", st)
    story.append(Paragraph(
        "A well-structured resume isn't just clean — it's strategic. Recruiters spend "
        "an average of 7 seconds on an initial scan. Every section below is designed "
        "to pass ATS filters and hook a human reader.",
        st["body"]))
    story.append(Spacer(1, 0.1 * inch))

    # ── Section cards ──
    sections = [
        ("1. Contact Information", [
            "<b>Name</b> — Full legal name, prominently at top (16–18 pt bold)",
            "<b>Phone</b> — Direct mobile only; no work numbers",
            "<b>Email</b> — Professional address (firstname.lastname@gmail.com)",
            "<b>LinkedIn</b> — Custom URL: linkedin.com/in/yourname",
            "<b>Location</b> — City, State is sufficient (no full street address)",
            "<b>Portfolio/GitHub</b> — Only if directly relevant to role",
        ]),
        ("2. Professional Summary (3–4 lines)", [
            "Open with your title and years of experience",
            "Name 2–3 core competencies that match the job description",
            "Quantify one career achievement (increased sales 40%, led team of 12)",
            "End with your target goal: <i>\"Seeking to bring X expertise to Y type of company\"</i>",
        ]),
        ("3. Work Experience — The CAR Method", [
            "<b>Challenge:</b> What problem or situation did you face?",
            "<b>Action:</b> What specific steps did YOU take? (use \"I\" not \"we\")",
            "<b>Result:</b> What was the measurable outcome? ($, %, time saved)",
            "",
            "<i>Example: Faced with 30% customer churn (Challenge), I redesigned the "
            "onboarding flow and trained 5 CSMs on retention scripts (Action), "
            "reducing churn by 18% in 90 days (Result).</i>",
        ]),
        ("4. Skills", [
            "Two columns: Technical Skills | Soft Skills",
            "Match exact keywords from the job posting (ATS optimization)",
            "List tools, platforms, certifications — not vague traits like 'hardworking'",
            "Limit to 10–15 skills; quality over quantity",
        ]),
        ("5. Education", [
            "Degree, Major — University Name, Year",
            "GPA only if above 3.5 and within 3 years of graduation",
            "Relevant coursework or honors only if directly applicable",
            "Certifications go here too (or in a separate Certifications section)",
        ]),
    ]

    for title, bullets in sections:
        story.append(Paragraph(title, st["h3"]))
        for b in bullets:
            if b:
                story.append(Paragraph(f"&bull;  {b}", st["bullet"]))
            else:
                story.append(Spacer(1, 3))
        story.append(Spacer(1, 4))

    story.append(tip_box(
        "Tailor your resume for every application. Swap in keywords from the job "
        "description and adjust your summary to mirror the role's language. "
        "One resume template — infinite customizations.",
        st))
    return story


def build_star(st):
    story = []
    story += section_header("Page 2", "The STAR Method Framework", st)
    story.append(Paragraph(
        "STAR (Situation, Task, Action, Result) is the gold standard for behavioral "
        "interview answers. Every hiring manager has been trained to listen for it. "
        "Master it and you'll stand out from 90% of candidates.",
        st["body"]))
    story.append(Spacer(1, 0.08 * inch))

    # STAR framework table
    star_data = [
        ["Letter", "Element", "What to Say"],
        ["S", "Situation", "Set the scene. One or two sentences of context. Keep it brief — this is background, not the story."],
        ["T", "Task", "Your specific role or responsibility in this situation. What were YOU accountable for?"],
        ["A", "Action", "The heart of your answer. 3–5 specific steps YOU took. Use 'I', not 'we'. Show your thinking."],
        ["R", "Result", "Quantified outcome. Numbers, percentages, time saved, revenue, or qualitative impact with evidence."],
    ]
    star_t = card(star_data,
                  col_widths=[0.35 * inch, 1.0 * inch, 4.9 * inch])
    story.append(star_t)
    story.append(Spacer(1, 0.15 * inch))

    # Three example answers
    examples = [
        (
            '"Tell me about yourself."',
            "I\'m a marketing manager with 6 years in B2B SaaS. I started my career "
            "in content at a Series A startup, then moved into demand gen at a "
            "mid-market company where I built our ABM program from scratch — that "
            "program generated $2M in pipeline in its first year. I\'m particularly "
            "strong at aligning marketing with sales, and I\'m looking to bring "
            "that experience to a growth-stage company like yours.",
        ),
        (
            '"Describe a challenge you overcame at work."',
            "S: Our engineering team was shipping features customers didn\'t want, "
            "causing a 22% drop in retention. T: As product lead, I owned the "
            "customer feedback loop. A: I launched monthly user interviews, built "
            "a \'voice of customer\' Slack channel feeding directly into sprint "
            "planning, and introduced a quarterly roadmap prioritization vote. "
            "R: Retention improved by 15% over two quarters and feature adoption "
            "rates rose 30%.",
        ),
        (
            '"Why should we hire you?"',
            "Three reasons: First, I\'ve done this exact role before — I\'ve managed "
            "enterprise accounts at [similar company] and grew NRR from 95% to 112%. "
            "Second, I move fast — I had my first QBR deck ready in week two at "
            "my current job. Third, your customers are in fintech, which is where "
            "I spent the first 4 years of my career. I already speak their language.",
        ),
    ]

    story.append(Paragraph("Example Answers", st["h2"]))
    for q, a in examples:
        story.append(Paragraph(q, st["script_q"]))
        story.append(Paragraph(a, st["script_a"]))

    story.append(tip_box(
        "Practice your STAR answers out loud — not in your head. Record yourself "
        "on your phone. Aim for 90–120 seconds per answer. Anything shorter "
        "lacks detail; anything longer loses the listener.",
        st))
    return story


def build_interview_q(st):
    story = []
    story += section_header("Page 3", "Top 10 Interview Questions & Answer Frameworks", st)
    story.append(Paragraph(
        "These aren't scripted answers — they're frameworks. Use the structure to "
        "build your own authentic answer using your real experience.",
        st["body"]))
    story.append(Spacer(1, 0.08 * inch))

    questions = [
        (
            "1. \"Walk me through your resume.\"",
            "Past → Present → Future. Briefly hit each role (1 sentence each), "
            "focus on progression, then connect your arc to THIS role and company.",
        ),
        (
            "2. \"What's your greatest strength?\"",
            "Name it. Prove it with a 1-sentence example. Connect it to the job. "
            "Do NOT list multiple strengths — focus makes you memorable.",
        ),
        (
            "3. \"What's your greatest weakness?\"",
            "Real weakness + what you're actively doing to improve it + evidence "
            "of progress. Never say 'I work too hard' — it's transparent and lazy.",
        ),
        (
            "4. \"Where do you see yourself in 5 years?\"",
            "Show ambition aligned with this role. 'I want to grow into [next level] "
            "in this field' — then tie it to why this company is the logical path. "
            "Avoid anything that signals you'll leave quickly.",
        ),
        (
            "5. \"Why do you want to work here?\"",
            "3 specifics: (1) something in their mission/product you genuinely care about, "
            "(2) a recent company achievement you've researched, (3) something about "
            "the role itself. Generic answers get screened out instantly.",
        ),
        (
            "6. \"Tell me about a time you failed.\"",
            "Use STAR. Own the failure fully — no blaming others. Show what you learned "
            "and how you applied that lesson. Interviewers want self-awareness, "
            "not perfection.",
        ),
        (
            "7. \"How do you handle conflict with a coworker?\"",
            "Use STAR with a real example. Show you addressed it directly and "
            "professionally, not via management or passive avoidance. Emphasize "
            "listening and finding common ground.",
        ),
        (
            "8. \"Why are you leaving your current job?\"",
            "Always forward-looking, never negative. Focus on what you're moving "
            "TOWARD (growth, new challenge, mission alignment) not what you're "
            "running from. If it was a layoff, say so directly — it's not a weakness.",
        ),
        (
            "9. \"What are your salary expectations?\"",
            "Research market rate first. Give a range with your target at the bottom "
            "third (anchor effect). 'Based on my research and experience, I'm targeting "
            "$X–$Y, though I'm open to the full compensation picture.'",
        ),
        (
            "10. \"Do you have any questions for us?\"",
            "Always have 3 ready. Best questions: (1) What does success look like in "
            "year one? (2) What's the biggest challenge the team is facing right now? "
            "(3) What do you love most about working here? Never ask about PTO first.",
        ),
    ]

    for q, framework in questions:
        tdata = [[
            Paragraph(q, st["bold_body"]),
            Paragraph(framework, st["body_sm"]),
        ]]
        t = Table(tdata, colWidths=[2.0 * inch, 4.25 * inch])
        t.setStyle(TableStyle([
            ("BACKGROUND",   (0, 0), (0, -1), CREAM_DARK),
            ("BACKGROUND",   (1, 0), (1, -1), CREAM),
            ("LEFTPADDING",  (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING",   (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING",(0, 0), (-1, -1), 6),
            ("VALIGN",       (0, 0), (-1, -1), "TOP"),
            ("LINEBELOW",    (0, 0), (-1, -1), 0.5, colors.HexColor("#D4A96A")),
            ("LINEBEFORE",   (0, 0), (0, -1), 3, AMBER_MID),
        ]))
        story.append(t)

    return story


def build_negotiation(st):
    story = []
    story += section_header("Page 4", "Salary Negotiation Scripts", st)
    story.append(Paragraph(
        "Negotiation is a professional expectation, not a confrontation. "
        "Studies show that failing to negotiate costs the average professional "
        "$500,000+ over a 40-year career. These scripts are built on two "
        "established negotiation principles:",
        st["body"]))

    principles_data = [
        [
            Paragraph("<b>Anchoring</b>", st["bold_body"]),
            Paragraph(
                "The first number mentioned sets the reference point. Always try to name "
                "your number first, and make it higher than your actual target to create "
                "negotiating room.", st["body_sm"]),
        ],
        [
            Paragraph("<b>BATNA</b>", st["bold_body"]),
            Paragraph(
                "<b>Best Alternative To a Negotiated Agreement.</b> Know your walk-away "
                "point before every negotiation. Having a competing offer is the strongest "
                "BATNA possible.", st["body_sm"]),
        ],
    ]
    pt = Table(principles_data, colWidths=[1.2 * inch, 5.05 * inch])
    pt.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), CREAM_DARK),
        ("LEFTPADDING",  (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING",   (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 6),
        ("VALIGN",       (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW",    (0, 0), (0, 0), 0.5, colors.HexColor("#D4A96A")),
        ("BOX",          (0, 0), (-1, -1), 0.5, AMBER_LIGHT),
    ]))
    story.append(pt)
    story.append(Spacer(1, 0.12 * inch))

    scenarios = [
        {
            "title": "Scenario 1: Initial Offer — Counter with Confidence",
            "context": "They offer $78,000. Your target is $87,000. Market rate is $82,000–$90,000.",
            "script": (
                '"Thank you — I\'m genuinely excited about this role and your team. '
                'Based on my [X years of experience / specific skill / the scope of this role], '
                'I was expecting something closer to $87,000. Is there flexibility there?"'
            ),
            "why": "You anchored at $87K (above target). The question 'Is there flexibility?' "
                   "is softer than a demand and almost always gets a 'let me check' response. "
                   "Silence after you state your number is golden — don't fill it.",
        },
        {
            "title": "Scenario 2: Competing Offer — Leverage Without Burning Bridges",
            "context": "You have a competing offer at $91,000. Your preferred company offered $83,000.",
            "script": (
                '"I want to be transparent with you — I\'m very excited about this opportunity '
                'and [Company] is my first choice. I do have a competing offer at $91,000, '
                'and I\'d love to find a way to make the numbers work here. Is there any '
                'possibility of getting closer to that range?"'
            ),
            "why": "State your preference for their company (genuine or strategic). A competing "
                   "offer is your strongest BATNA. You're not giving an ultimatum — you're "
                   "giving them the opportunity to win you.",
        },
        {
            "title": "Scenario 3: Asking for a Raise",
            "context": "You've been in your role 18 months, taken on new responsibilities, and market data shows you're 12% below market.",
            "script": (
                '"I\'d like to schedule time to talk about my compensation. '
                'Over the past 18 months I\'ve [specific achievement 1] and [specific achievement 2], '
                'and I\'ve taken on [new responsibility]. Based on current market data for this role '
                'in [location], I\'d like to discuss moving my salary to $[target]. '
                'When would be a good time to talk?"'
            ),
            "why": "Never ask for a raise in the moment. Scheduling a dedicated conversation "
                   "signals professionalism and gives them time to prepare yes. Lead with "
                   "your achievements — make the business case before the ask.",
        },
    ]

    for s in scenarios:
        story.append(Paragraph(s["title"], st["h3"]))
        story.append(Paragraph(f"<i>Context: {s['context']}</i>", st["body_sm"]))
        story.append(Spacer(1, 3))
        # Script box
        sdata = [[Paragraph(s["script"], st["script_a"])]]
        st_box = Table(sdata, colWidths=["100%"])
        st_box.setStyle(TableStyle([
            ("BACKGROUND",   (0, 0), (-1, -1), colors.HexColor("#FEF3DC")),
            ("LEFTPADDING",  (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING",   (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING",(0, 0), (-1, -1), 8),
            ("LINEBEFORE",   (0, 0), (0, -1), 3, AMBER_LIGHT),
        ]))
        story.append(st_box)
        story.append(Paragraph(f"<b>Why it works:</b> {s['why']}", st["body_sm"]))
        story.append(Spacer(1, 8))

    return story


def build_linkedin(st):
    story = []
    story += section_header("Page 5", "LinkedIn Optimization Checklist", st)
    story.append(Paragraph(
        "LinkedIn is the #1 sourcing tool for recruiters. An optimized profile "
        "dramatically increases inbound opportunities — even when you're not "
        "actively applying. Work through this checklist section by section.",
        st["body"]))
    story.append(Spacer(1, 0.1 * inch))

    sections = [
        ("Profile Basics", [
            ("Professional headshot — bright background, business casual or formal", True),
            ("Background banner — industry-relevant or branded image (not default blue)", False),
            ("Custom LinkedIn URL: linkedin.com/in/firstname-lastname", False),
            ("Open to Work set to 'Recruiters only' if currently employed", False),
        ]),
        ("Headline (Your Most Valuable Real Estate)", [
            ("Don't just list your job title — add value: 'Senior PM | Building B2B SaaS Products That Retain'", False),
            ("Include 2–3 relevant keywords recruiters search for in your field", False),
            ("120 characters max — every word earns its place", False),
        ]),
        ("About Section (Summary)", [
            ("Open with a hook — not 'I am a...' but a bold statement or result", False),
            ("Tell your professional story in 3 paragraphs: who you are, what you do best, what you're seeking", False),
            ("Include 5–8 keywords naturally woven into the text", False),
            ("End with a clear call to action: 'Connect with me' or 'DM me about [topic]'", False),
        ]),
        ("Experience Section", [
            ("Each role has 3–5 bullets using the CAR or STAR method", False),
            ("Every bullet starts with an action verb (Led, Built, Reduced, Grew)", False),
            ("At least one quantified result per role (%, $, volume, time)", False),
            ("Use keywords from job descriptions in your target roles", False),
        ]),
        ("Skills & Endorsements", [
            ("Add at least 15 skills — recruiters filter by keyword match", False),
            ("Top 3 skills pinned are most visible — choose strategically", False),
            ("Endorse connections' skills — many will reciprocate", False),
        ]),
        ("Networking Activity", [
            ("Post 1–2x per week — original insights, lessons, wins in your field", False),
            ("Comment on 5 posts per week in your industry — visibility compounds", False),
            ("Send 5 connection requests per week with personalized notes", False),
            ("Follow companies you want to work at and engage with their content", False),
            ("Ask 2–3 former managers or colleagues for written recommendations", False),
        ]),
    ]

    for sec_title, items in sections:
        story.append(Paragraph(sec_title, st["h3"]))
        for text, done in items:
            story.append(ChecklistItem(text, st["body_sm"], done=done))
        story.append(Spacer(1, 6))

    story.append(tip_box(
        "The LinkedIn algorithm rewards consistency over virality. Post regularly "
        "in your niche. A recruiter who sees your name 3 times before reaching "
        "out is far more likely to think of you first.",
        st))
    return story


def build_cta(st):
    story = []
    story.append(Spacer(1, 1.5 * inch))

    # Main CTA card
    cta_data = [[
        Paragraph("Ready to Accelerate<br/>Your Job Search?", st["cta_title"]),
    ]]
    cta_t = Table(cta_data, colWidths=[5.5 * inch])
    cta_t.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), AMBER_DARK),
        ("LEFTPADDING",  (0, 0), (-1, -1), 30),
        ("RIGHTPADDING", (0, 0), (-1, -1), 30),
        ("TOPPADDING",   (0, 0), (-1, -1), 30),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 20),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
    ]))
    story.append(cta_t)

    body_data = [[
        Paragraph(
            "Get more free guides, templates, and career strategies at",
            st["cta_body"]),
    ]]
    body_t = Table(body_data, colWidths=[5.5 * inch])
    body_t.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), AMBER_MID),
        ("LEFTPADDING",  (0, 0), (-1, -1), 30),
        ("RIGHTPADDING", (0, 0), (-1, -1), 30),
        ("TOPPADDING",   (0, 0), (-1, -1), 16),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 8),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
    ]))
    story.append(body_t)

    url_data = [[Paragraph("howtofindajob.org", st["cta_url"])]]
    url_t = Table(url_data, colWidths=[5.5 * inch])
    url_t.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), AMBER_MID),
        ("LEFTPADDING",  (0, 0), (-1, -1), 30),
        ("RIGHTPADDING", (0, 0), (-1, -1), 30),
        ("TOPPADDING",   (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 20),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
    ]))
    story.append(url_t)

    story.append(Spacer(1, 0.4 * inch))

    # What's on the site
    story.append(Paragraph("More Free Resources at HowToFindAJob.org", st["h2"]))

    resources = [
        "Job search tracking spreadsheet template",
        "Cover letter frameworks for every scenario",
        "Industry-specific resume examples",
        "How to use AI tools in your job search (ethically)",
        "Networking email scripts that actually get replies",
        "Interview thank-you email templates",
    ]

    cols = [resources[:3], resources[3:]]
    for col in cols:
        for item in col:
            story.append(Paragraph(f"&bull;  {item}", st["bullet"]))

    story.append(Spacer(1, 0.4 * inch))
    story.append(divider(AMBER_LIGHT))
    story.append(Spacer(1, 0.1 * inch))
    story.append(Paragraph(
        "Share this guide with someone who needs it.<br/>"
        "You might just change their career.",
        ParagraphStyle("ShareMsg",
            fontSize=11, leading=16, textColor=TEXT_MUTED,
            fontName="Helvetica-Oblique", alignment=TA_CENTER)))

    return story


# ── Main ──────────────────────────────────────────────────────────────────────

def generate():
    out_path = os.path.join(
        os.path.dirname(__file__), "job-search-accelerator.pdf")

    st = make_styles()

    # Cover page uses its own canvas callback
    class MultiPageDoc(SimpleDocTemplate):
        def __init__(self, *args, **kwargs):
            self._cover_pages = kwargs.pop("cover_pages", 1)
            super().__init__(*args, **kwargs)
            self._page_num = 0

        def handle_pageBegin(self):
            self._page_num += 1
            super().handle_pageBegin()

    doc = SimpleDocTemplate(
        out_path,
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.45 * inch,
        title="The Job Search Accelerator",
        author="HowToFindAJob.org",
        subject="Resume, Interview, Negotiation Frameworks",
    )

    # Build pages
    story = []

    # ── Cover ──
    story += build_cover(st)
    story.append(PageBreak())

    # ── Resume ──
    story += build_resume(st)
    story.append(PageBreak())

    # ── STAR ──
    story += build_star(st)
    story.append(PageBreak())

    # ── Interview Qs ──
    story += build_interview_q(st)
    story.append(PageBreak())

    # ── Negotiation ──
    story += build_negotiation(st)
    story.append(PageBreak())

    # ── LinkedIn ──
    story += build_linkedin(st)
    story.append(PageBreak())

    # ── CTA / Back page ──
    story += build_cta(st)

    # Page template selection
    from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame

    cover_frame = Frame(
        0, 0, PAGE_W, PAGE_H,
        leftPadding=0.65 * inch, rightPadding=0.65 * inch,
        topPadding=0.55 * inch, bottomPadding=0.45 * inch,
        id="cover")

    inner_frame = Frame(
        0, 0, PAGE_W, PAGE_H,
        leftPadding=0.65 * inch, rightPadding=0.65 * inch,
        topPadding=0.7 * inch, bottomPadding=0.55 * inch,
        id="inner")

    cta_frame = Frame(
        0, 0, PAGE_W, PAGE_H,
        leftPadding=0.65 * inch, rightPadding=0.65 * inch,
        topPadding=0.7 * inch, bottomPadding=0.55 * inch,
        id="cta")

    doc2 = BaseDocTemplate(
        out_path,
        pagesize=letter,
        title="The Job Search Accelerator",
        author="HowToFindAJob.org",
        subject="Resume, Interview & Negotiation Frameworks | howtofindajob.org",
    )

    cover_template  = PageTemplate(id="Cover", frames=[cover_frame], onPage=cover_bg)
    inner_template  = PageTemplate(id="Inner", frames=[inner_frame], onPage=page_bg)

    doc2.addPageTemplates([cover_template, inner_template])

    # Insert template switches
    from reportlab.platypus import NextPageTemplate
    final_story = (
        [NextPageTemplate("Cover")]
        + build_cover(st)
        + [NextPageTemplate("Inner"), PageBreak()]
        + build_resume(st)
        + [PageBreak()]
        + build_star(st)
        + [PageBreak()]
        + build_interview_q(st)
        + [PageBreak()]
        + build_negotiation(st)
        + [PageBreak()]
        + build_linkedin(st)
        + [PageBreak()]
        + build_cta(st)
    )

    doc2.build(final_story)
    print(f"PDF created: {out_path}")
    return out_path


if __name__ == "__main__":
    generate()
