
export interface Reports {
    sourceKey: number;
    sourceName: string;
    reportKey: number;
    reportName: string;
    reportDescription: string;
    reportUpdateTime: Date;
    reportUpdateFrequency: string;
    sourceURL: string;
    tags: Tag[];
    reportLocations: ReportLocation[];
}

export interface ReportLocation {
    format: string;
    url: string;
}

export interface Tag {
    tagID: number;
    tagTypeID: number;
    reportKey: number;
    tagName: string;
}

export interface ReportLocation {
    reportLocationID: number;
    reportKey: number;
    reportFormat: string;
    reportURL: string;
}
