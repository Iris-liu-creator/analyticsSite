import { BarChart3, Bot, Cloud, Database, FileSpreadsheet, LineChart, Workflow, Wrench } from "lucide-react";

export const skills = [
  { name: "Power BI", level: 95, group: "BI", icon: BarChart3 },
  { name: "SQL", level: 92, group: "Data", icon: Database },
  { name: "Python", level: 84, group: "Analytics", icon: LineChart },
  { name: "DAX", level: 88, group: "BI", icon: BarChart3 },
  { name: "Power Query", level: 86, group: "BI", icon: Workflow },
  { name: "Excel", level: 90, group: "Productivity", icon: FileSpreadsheet },
  { name: "AWS Redshift", level: 78, group: "Warehouse", icon: Cloud },
  { name: "Databricks", level: 74, group: "Engineering", icon: Database },
  { name: "Tableau", level: 76, group: "BI", icon: BarChart3 },
  { name: "AI/Automation", level: 82, group: "AI", icon: Bot },
  { name: "RevOps Analytics", level: 88, group: "Business", icon: Wrench }
];

export const impactStats = [
  { label: "Reports built", value: "85+" },
  { label: "Dashboards maintained", value: "32" },
  { label: "Business functions supported", value: "7" },
  { label: "Manual reporting hours reduced", value: "240+" }
];
