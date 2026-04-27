import { BarChart3, BookOpenCheck, Bot, CheckCircle2, ClipboardList, Database, FileText, LineChart, RefreshCw, ShieldCheck, SlidersHorizontal, Users } from "lucide-react";

export type ServicePillar = {
  title: string;
  description: string;
  includes: string[];
  icon: typeof BarChart3;
};

export type ServicePackage = {
  title: string;
  positioning: string;
  bestFor: string;
  includes: string[];
  pricing: string;
};

export type ServiceAddOn = {
  title: string;
  includes: string[];
  pricing: string;
  icon: typeof RefreshCw;
};

export type CredibilityCard = {
  title: string;
  icon: typeof ShieldCheck;
};

// TODO: Replace the fallback with your real Calendly URL by setting NEXT_PUBLIC_CALENDLY_URL.
export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/your-name/analytics-discovery-call";

export const servicePillars: ServicePillar[] = [
  {
    title: "Analytics Setup & Reporting Design",
    description:
      "Help businesses set up practical analytics foundations, dashboards, complicated reporting logic, and reporting systems that support clear insight generation.",
    icon: BarChart3,
    includes: [
      "Business analytics setup",
      "Power BI / BI dashboard development",
      "Complex reporting logic",
      "Data model and semantic layer design",
      "Reporting system design",
      "Insight generation framework",
      "Executive and operational reporting views"
    ]
  },
  {
    title: "KPI, OKR & Performance Tracking",
    description:
      "Help teams clarify what to measure, how to define success, and how to build trackers that support real-time business performance monitoring.",
    icon: SlidersHorizontal,
    includes: [
      "KPI and OKR breakdown",
      "Metric definition and business rule clarification",
      "Real-time or recurring performance tracker",
      "Department-level reporting structure",
      "Management reporting framework",
      "Data storytelling and decision-support views"
    ]
  },
  {
    title: "Data Enablement, Automation & BAU Readiness",
    description:
      "Help companies build the groundwork for scalable, ops-ready, data-driven BAU reporting and workflow automation.",
    icon: Bot,
    includes: [
      "Data pipeline groundwork",
      "Workflow automation",
      "Reporting automation",
      "Infrastructure setup framework",
      "Documentation and handover",
      "Enablement sessions for business users",
      "Industry best-practice implementation for analytics operations"
    ]
  }
];

export const capabilityGroups = [
  {
    title: "BI and reporting",
    tools: ["Power BI", "DAX", "Power Query", "Tableau", "Dashboard documentation"]
  },
  {
    title: "Data and automation",
    tools: ["SQL", "Python", "Excel", "AWS Redshift", "Databricks", "Automation workflows"]
  },
  {
    title: "Business enablement",
    tools: ["CRM / RevOps reporting", "KPI framework design", "Data storytelling"]
  }
];

export const servicePackages: ServicePackage[] = [
  {
    title: "Analytics Advisory & Roadmap",
    positioning: "For companies that need guidance, clarity, and a practical analytics direction before building.",
    bestFor: "Teams unsure which KPIs to track, how to structure reports, or how to improve existing dashboards.",
    pricing: "Custom quote after discovery",
    includes: [
      "Discovery session",
      "Current reporting review",
      "KPI / OKR clarification",
      "Dashboard or reporting gap assessment",
      "Analytics roadmap",
      "Prioritised recommendations",
      "Documentation of next steps"
    ]
  },
  {
    title: "Dashboard & Reporting Foundation",
    positioning: "For teams that need a reliable dashboard or reporting system built from business requirements.",
    bestFor: "Companies with recurring manual reports, unclear dashboard structure, or disconnected reporting logic.",
    pricing: "Custom quote after discovery",
    includes: [
      "Business requirement clarification",
      "Data source review",
      "Dashboard design and build",
      "KPI tracker setup",
      "Data model / semantic model planning",
      "Reporting logic and business rule documentation",
      "User handover and enablement session"
    ]
  },
  {
    title: "Data Enablement & Automation System",
    positioning:
      "For companies that need a more scalable analytics workflow, reporting automation, and ops-ready data foundations.",
    bestFor:
      "Medium-sized businesses that want to reduce manual reporting effort and create a more sustainable analytics operating model.",
    pricing: "Custom quote after discovery",
    includes: [
      "Data pipeline groundwork",
      "Reporting automation workflow",
      "Multi-source data structure planning",
      "Dashboard and reporting system design",
      "KPI / OKR tracker",
      "Documentation and governance framework",
      "Enablement for business users",
      "Post-launch support planning"
    ]
  }
];

export const serviceAddOns: ServiceAddOn[] = [
  {
    title: "Monthly Dashboard Maintenance",
    icon: RefreshCw,
    pricing: "Available as monthly support or custom add-on",
    includes: ["Dashboard issue fixes", "Minor visual/reporting changes", "KPI logic adjustments", "Data refresh monitoring support", "Monthly check-in"]
  },
  {
    title: "Documentation & Data Dictionary Refresh",
    icon: FileText,
    pricing: "Available as monthly support or custom add-on",
    includes: ["Updating metric definitions", "Documenting data sources", "Maintaining business rules", "Creating user-friendly reporting guides"]
  },
  {
    title: "Workflow Automation Support",
    icon: Bot,
    pricing: "Available as monthly support or custom add-on",
    includes: ["Automation monitoring", "Minor workflow updates", "Scheduled reporting support", "Power Automate or similar workflow improvements"]
  },
  {
    title: "Training & Enablement Session",
    icon: Users,
    pricing: "Available as monthly support or custom add-on",
    includes: ["Dashboard walkthrough", "Power BI usage guidance", "KPI interpretation session", "Business user enablement"]
  },
  {
    title: "Advanced Customisation",
    icon: Database,
    pricing: "Available as monthly support or custom add-on",
    includes: ["New dashboard pages", "New data sources", "Advanced DAX / SQL logic", "Management reporting enhancements"]
  }
];

export const credibilityCards: CredibilityCard[] = [
  { title: "Business-first analytics approach", icon: LineChart },
  { title: "Clear KPI and metric definitions", icon: ClipboardList },
  { title: "Practical dashboard design", icon: BarChart3 },
  { title: "Documentation and handover included", icon: BookOpenCheck },
  { title: "Built for BAU adoption, not just one-off reporting", icon: CheckCircle2 },
  { title: "Scalable foundation for future automation", icon: ShieldCheck }
];

export const budgetRanges = [
  "Not sure yet",
  "Under AUD $2,000",
  "AUD $2,000 - $5,000",
  "AUD $5,000 - $10,000",
  "AUD $10,000+"
];

export const timelineOptions = ["ASAP", "Within 1 month", "1-3 months", "3+ months", "Exploring only"];
