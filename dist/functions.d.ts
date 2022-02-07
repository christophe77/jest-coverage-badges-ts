import { ReportDetails } from './types';
export declare function findArgument(argName: string, defaultOutput: string): string;
export declare function getColour(coverage: number): string;
export declare function getBadge(reportType: ReportDetails, reportName: string): string;
export declare function getBadgeByKey(reportType: ReportDetails, reportName: string, outputPath: string): void;
