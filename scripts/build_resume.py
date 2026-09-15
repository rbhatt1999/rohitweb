"""Build the public resume: python3 scripts/build_resume.py.

Requires reportlab and pypdf. Content is kept here so PDF updates are reviewable.
"""

from pathlib import Path

import reportlab
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable, PageBreak, Paragraph, SimpleDocTemplate,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public/assets/resume.pdf"
FONT_DIR = Path(reportlab.__file__).parent / "fonts"
pdfmetrics.registerFont(TTFont("Resume", str(FONT_DIR / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("Resume-Bold", str(FONT_DIR / "VeraBd.ttf")))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="Resume-Bold")
BODY = ParagraphStyle(
    "body", fontName="Resume", fontSize=10, leading=14,
    textColor=colors.HexColor("#202020"), spaceAfter=5,
)
STYLES = {
    "body": BODY,
    "name": ParagraphStyle("name", parent=BODY, fontName="Resume-Bold", fontSize=24, leading=28, spaceAfter=5),
    "tagline": ParagraphStyle("tagline", parent=BODY, fontSize=12, leading=16, spaceAfter=7),
    "contact": ParagraphStyle("contact", parent=BODY, fontSize=9.5, leading=13, spaceAfter=2),
    "section": ParagraphStyle("section", parent=BODY, fontName="Resume-Bold", fontSize=10.5, leading=14, spaceBefore=12, spaceAfter=5, keepWithNext=True),
    "company": ParagraphStyle("company", parent=BODY, fontName="Resume-Bold", fontSize=10.5, leading=15, spaceBefore=6, spaceAfter=2, keepWithNext=True),
    "role": ParagraphStyle("role", parent=BODY, fontSize=10, leading=14, spaceAfter=4, keepWithNext=True),
    "bullet": ParagraphStyle("bullet", parent=BODY, leftIndent=10, firstLineIndent=-10, spaceAfter=5),
}


def build():
    story = []

    def paragraph(text, style="body"):
        story.append(Paragraph(text, STYLES[style]))

    def section(title):
        paragraph(title.upper(), "section")
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#777777"), spaceAfter=6))

    def bullet(text):
        paragraph("&#8226; " + text, "bullet")

    paragraph("ROHIT BHATT", "name")
    paragraph("Forward Deployed Engineer | Production AI &amp; Full-Stack Systems", "tagline")
    paragraph('Hyderabad, India | +91 7017081199 | <link href="mailto:rohit.bhatt.dev@gmail.com">rohit.bhatt.dev@gmail.com</link>', "contact")
    paragraph('<link href="https://www.linkedin.com/in/rohitbhatt-dev">linkedin.com/in/rohitbhatt-dev</link> | <link href="https://github.com/rbhatt1999">github.com/rbhatt1999</link> | <link href="https://www.rohitcodes.com">rohitcodes.com</link>', "contact")

    section("Professional Summary")
    paragraph(
        "Forward Deployed Engineer at ekincare, promoted in July 2026, with 5+ years across "
        "engineering and technical delivery. Builds production AI workflows and full-stack systems "
        "with Ruby on Rails, React, Python, and PostgreSQL. Experience spans LLM integrations, "
        "human review workflows, pricing optimization, and production reliability. "
        "MCA in Artificial Intelligence and Machine Learning."
    )

    section("Technical Skills")
    paragraph("<b>Languages:</b> Ruby, Python, JavaScript, SQL")
    paragraph("<b>Backend &amp; frontend:</b> Ruby on Rails, Flask, REST APIs, Sidekiq, React, Next.js, Redux")
    paragraph("<b>AI engineering:</b> Claude, Gemini, Vertex AI, LangChain, Model Context Protocol (MCP), structured outputs, context management, human-in-the-loop workflows")
    paragraph("<b>Data &amp; delivery:</b> PostgreSQL, Redis, AWS, Docker, GitHub Actions, RSpec, Metabase, Elasticsearch, Sentry")

    section("Professional Experience")
    paragraph("ekincare | Hyderabad, India", "company")
    paragraph("<b>Forward Deployed Engineer</b> | July 2026 - Present", "role")
    bullet("Delivered end-to-end healthcare pricing workflows: background computation, authenticated callbacks, time-segmented SKU combinations, operational review, and automated or bulk approvals.")
    bullet("Migrated claims and conversational AI workflows to Vertex AI, including eight specialized agents; centralized provider configuration while preserving tool execution, fallback behavior, and usage accounting.")
    bullet("Hardened MCP streaming against stalled clients with bounded socket writes and concurrency-safe cleanup; validated recovery and concurrent requests with real-socket tests.")
    paragraph("<b>Software Development Engineer II (Full Stack)</b> | December 2024 - June 2026", "role")
    bullet("Built AI-assisted insurance claim adjudication with Claude and Gemini, PostgreSQL JSONB storage, and Sidekiq pipelines; connected model recommendations to human review and feedback workflows.")
    bullet("Built a read-only MCP database server with SQL validation, authentication, and concurrency controls, enabling guarded database access from AI tools.")
    bullet("Implemented Gemini-based diagnosis and chief-complaint extraction with Sidekiq processing and scheduled recovery for documents arriving after the initial job.")
    bullet("Developed React adjudication interfaces and Metabase reporting for LLM token usage and cost, making model recommendations and operating costs visible to reviewers and engineering teams.")

    story.append(PageBreak())
    section("Professional Experience - Continued")
    paragraph("YOUR-SPACE | Delhi, India", "company")
    paragraph("<b>Software Engineer - Ruby on Rails</b> | October 2023 - December 2024", "role")
    bullet("Developed Rails APIs and relational data models serving mobile, web, and CRM products, supporting 10,000+ active users and 25,000+ daily API requests.")
    bullet("Optimized PostgreSQL queries and schema design; improved query performance by 35% and API response times by 25%.")
    bullet("Delivered Next.js interfaces, AWS deployments with Capistrano, and Metabase reporting; automated 50+ SQL queries for operational insights.")

    paragraph("Peepoye Network | Remote", "company")
    paragraph("<b>Full Stack Engineer</b> | June 2023 - October 2023", "role")
    bullet("Built an opinion trading platform with Rails and React, including a custom CMS, authentication, and live vote counts; migrated the company website from WordPress to Next.js.")

    paragraph("Microverse | Remote", "company")
    paragraph("<b>Code Reviewer</b> | November 2022 - June 2023", "role")
    bullet("Reviewed Rails and React projects and mentored developers on architecture, maintainability, and Git workflows in an international remote learning environment.")

    paragraph("Huawei Technologies | Gurgaon, India", "company")
    paragraph("<b>Design Engineer</b> | February 2021 - October 2022", "role")
    bullet("Led a 21-member project team through delivery, earning a client appreciation letter and two Star Bean Awards for customer satisfaction.")

    section("Selected Project")
    paragraph('Sadhak AI | <link href="https://github.com/rbhatt1999/sadhak-ai">github.com/rbhatt1999/sadhak-ai</link>', "company")
    bullet("Built a multi-user AI chat application using Python, Flask, LangChain, and Gemini, with Google OAuth, PostgreSQL conversation storage, and Server-Sent Events streaming.")
    bullet("Implemented rolling conversation summarization to manage context-window limits while preserving recent turns, plus Pydantic structured outputs and session/message APIs.")

    section("Education")
    paragraph("<b>Master of Computer Applications (MCA), AI/ML</b><br/>Chandigarh University | Completed June 2026")
    paragraph("<b>Bachelor of Computer Applications (BCA)</b><br/>Chandigarh University | July 2021 - July 2024")
    paragraph("<b>Full Stack Web Development Program</b><br/>Microverse | October 2022 - June 2023 | 1,300+ hours")

    section("Recognition")
    paragraph("ekincare: Tech Obsession Award (2x) and Extreme Ownership Award.")

    document = SimpleDocTemplate(
        str(OUTPUT), pagesize=letter, rightMargin=44, leftMargin=44,
        topMargin=35, bottomMargin=35, title="Rohit Bhatt - Forward Deployed Engineer",
        author="Rohit Bhatt", subject="Production AI and full-stack engineering resume",
    )
    document.build(story)

    # A source edit must preserve a readable two-page PDF and its essential facts.
    reader = PdfReader(OUTPUT)
    assert len(reader.pages) == 2, f"Expected 2 pages, got {len(reader.pages)}"
    text = "\n".join(page.extract_text() for page in reader.pages)
    for expected in (
        "ROHIT BHATT", "Forward Deployed Engineer", "July 2026 - Present",
        "December 2024 - June 2026", "Completed June 2026", "rohit.bhatt.dev@gmail.com",
        "Professional Summary".upper(), "Technical Skills".upper(), "EDUCATION",
    ):
        assert expected in text, f"Missing resume text: {expected}"
    assert "\ufffd" not in text, "PDF text contains a replacement character"
    assert text.index("PROFESSIONAL SUMMARY") < text.index("TECHNICAL SKILLS") < text.index("PROFESSIONAL EXPERIENCE")
    print(f"Built and checked {OUTPUT} ({len(reader.pages)} pages, {len(text.split())} words)")


if __name__ == "__main__":
    build()
