export declare type ReportDetails = {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
};
declare type Total = {
    lines: ReportDetails;
    statements: ReportDetails;
    functions: ReportDetails;
    branches: ReportDetails;
    branchesTrue: ReportDetails;
    [key: string]: ReportDetails;
};
export declare type Report = {
    total: Total;
};
export {};
