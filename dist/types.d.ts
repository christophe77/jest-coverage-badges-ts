export type ReportDetails = {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
};
type Total = {
    lines: ReportDetails;
    statements: ReportDetails;
    functions: ReportDetails;
    branches: ReportDetails;
    branchesTrue: ReportDetails;
    [key: string]: ReportDetails;
};
export type Report = {
    total: Total;
};
export {};
