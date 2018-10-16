
export interface DataSource {
    id: string;
    name: string;
    tags: string[];
    dataSource: string;
    description: string;
    url: string;
    download: Download[];
    dateUpdated: string;
}

export interface Download {
    format: string;
    url: string;
}

export const datasources: DataSource[] = [
    {
        id: '11', name: 'Mr. Nice', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '12', name: 'Narco', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '13', name: 'Bombasto', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '14', name: 'Celeritas', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '15', name: 'Magneta', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '16', name: 'RubberMan', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '17', name: 'Dynama', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '18', name: 'Dr IQ', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '19', name: 'Magma', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    },
    {
        id: '20', name: 'Tornado', tags: ['test', 'test'],
        dataSource: 'FRED', description: 'test', url: 'http://google.com', download: [{ format: 'CSV', url: 'http://google.com' }], dateUpdated: '10/16/2018'
    }
];