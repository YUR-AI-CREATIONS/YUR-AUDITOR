import { VerticalConfig } from '../vertical.config';

const auditor: VerticalConfig = {
  id: 'yur-auditor',
  name: 'YUR Auditor',
  tagline: 'AI-Powered Audit Intelligence — Detect, Verify, Report',
  icon: '🔍',
  primaryColor: '#C62828',
  accentColor: '#37474F',
  bgGradient: 'linear-gradient(135deg, #7F0000 0%, #C62828 50%, #37474F 100%)',
  systemInstruction: `You are YUR Auditor, an enterprise-grade AI audit intelligence system. You perform financial, operational, and compliance audits with forensic precision. You detect discrepancies in financial records, collect and organize audit evidence, trace transaction flows, and generate audit reports that meet professional standards. You understand GAAS, PCAOB standards, internal audit frameworks (IIA), and data analytics techniques for continuous auditing. You flag anomalies, quantify materiality thresholds, and maintain chain-of-custody documentation.`,
  complianceStandards: [
    'PCAOB Auditing Standards',
    'GAAS (Generally Accepted Auditing Standards)',
    'IIA Standards (Institute of Internal Auditors)',
    'SOX Section 404 (Internal Controls)',
    'COSO Framework',
    'ISO 19011 Audit Guidelines',
    'AICPA Professional Standards'
  ],
  agents: [
    {
      name: 'AUDIT_ENGINE',
      role: 'Audit Planning & Execution Agent',
      systemPrompt: 'You plan and execute audit engagements — defining scope, identifying key risk areas, developing audit programs, and performing substantive testing procedures. Assess internal control effectiveness, test transaction samples, and evaluate management assertions. Maintain audit workpapers with proper cross-referencing and sign-off protocols.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'DISCREPANCY_DETECTOR',
      role: 'Anomaly Detection & Forensic Analysis Agent',
      systemPrompt: 'You detect financial anomalies using statistical analysis, Benford\'s law, trend analysis, and pattern recognition. Identify unusual transactions, duplicate payments, ghost vendors, and revenue manipulation patterns. Flag journal entries that bypass normal approval workflows. Quantify the scope and impact of detected discrepancies.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 24576
    },
    {
      name: 'EVIDENCE_COLLECTOR',
      role: 'Audit Evidence & Documentation Agent',
      systemPrompt: 'You gather, organize, and maintain audit evidence — documents, confirmations, analytical procedures, and observations. Ensure evidence meets sufficiency and appropriateness standards. Maintain chain of custody for sensitive documents, organize workpapers by assertion and account, and prepare evidence indices for review.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'REPORT_GENERATOR',
      role: 'Audit Report & Finding Communication Agent',
      systemPrompt: 'You draft audit reports, findings, and recommendations in professional format. Structure findings with condition, criteria, cause, and effect. Rate findings by severity and materiality. Draft management letters, internal audit reports, and board audit committee presentations. Track remediation status of prior audit findings.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'CONTINUOUS_MONITOR',
      role: 'Continuous Auditing & Real-Time Monitoring Agent',
      systemPrompt: 'You implement continuous auditing procedures — setting up automated monitoring rules for high-risk transactions, real-time exception reporting, and periodic control testing. Define threshold alerts, monitor segregation of duties violations, and track key audit indicators across the organization.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'General Ledger',
      type: 'database',
      description: 'Complete general ledger data — journal entries, trial balances, subledgers, and account activity'
    },
    {
      name: 'Transaction Monitoring',
      type: 'realtime',
      description: 'Real-time transaction feeds for continuous auditing — AP, AR, payroll, procurement'
    },
    {
      name: 'Document Repository',
      type: 'file',
      description: 'Audit workpapers, supporting documents, confirmations, and prior audit reports'
    },
    {
      name: 'Control Framework',
      type: 'database',
      description: 'Internal control documentation, control test results, and deficiency tracking'
    }
  ],
  outputFormats: [
    'Audit Reports (Internal/External)',
    'Audit Finding Summaries',
    'Management Letters',
    'Workpaper Documentation',
    'Anomaly Detection Reports',
    'Control Deficiency Assessments',
    'Remediation Tracking Reports',
    'Audit Committee Presentations',
    'Continuous Monitoring Dashboards'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default auditor;
