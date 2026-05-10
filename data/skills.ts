import { BarChart3, Bot, Cloud, Database, FileSpreadsheet, LineChart, Workflow, Wrench } from "lucide-react";

export const skills = [
  { name: "Power BI", level: 99, group: "BI", icon: BarChart3 },
  { name: "SQL", level: 99, group: "Data", icon: Database },
  { name: "Python", level: 92, group: "Analytics", icon: LineChart },
  { name: "DAX", level: 88, group: "BI", icon: BarChart3 },
  { name: "Power Query", level: 95, group: "BI", icon: Workflow },
  { name: "Excel", level: 95, group: "Productivity", icon: FileSpreadsheet },
  { name: "AWS Redshift", level: 92, group: "Warehouse", icon: Cloud },
  { name: "Databricks", level: 92, group: "Engineering", icon: Database },
  { name: "Tableau", level: 85, group: "BI", icon: BarChart3 },
  { name: "AI/Automation", level: 90, group: "AI", icon: Bot },
  { name: "RevOps Analytics", level: 95, group: "Business", icon: Wrench }
];

export const impactStats = [
  { label: "Certified Semantic Models Built", value: "30+" },
  { label: "Automations Delivered", value: "50+" },
  { label: "Analytics Sites Published", value: "10" },
  { label: "MAR Processed", value: "100K+" }
];

export const analyticsStackSections = [
  {
    title: "Data Pipeline & Gold Layer",
    description: "Source-to-reporting workflows, transformation logic, validation, and trusted business-ready datasets."
  },
  {
    title: "Data Modelling & Governance",
    description: "Semantic models, KPI consistency, DAX, SQL, Power Query, and data quality controls."
  },
  {
    title: "BI & Decision Intelligence",
    description: "Power BI dashboards, executive reporting, KPI frameworks, self-service analytics, and data storytelling."
  },
  {
    title: "Business Domain Analytics",
    description: "SaaS and finance-sector analytics across sales, marketing, professional services, customer success, finance, people, and operations."
  },
  {
    title: "Stakeholder Enablement",
    description: "Business requirements, stakeholder alignment, documentation, training, and decision-focused communication."
  },
  {
    title: "Automation & AI Workflows",
    description: "Python, reporting automation, AI-assisted workflows, process improvement, and manual effort reduction."
  }
];
