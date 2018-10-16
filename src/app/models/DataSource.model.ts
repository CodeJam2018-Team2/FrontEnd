
export interface DataSource {
    id: string;
    name: string;
    tags: Array<string>[];
    dataSource: string;
    description: string;
    url: string;
    download: Download[];
    dateUpdated: Date;
}

export interface Download {
    format: string;
    url: string;
}