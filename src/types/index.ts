export interface Assets {
    assets: Asset[];
    companies: Company[];
    units: Unit[];
    users: User[];
    workorders: Workorder[];
}

export interface Asset {
    assetData: Asset
    assignedUserIds: number[];
    companyId: number;
    healthHistory: HealthHistory[];
    healthscore: number;
    id: number;
    image: string;
    metrics: Metrics;
    model: string;
    name: string;
    sensors: string[];
    specifications: Specifications;
    status: Status;
    unitId: number;
}

export interface HealthHistory {
    status: Status;
    timestamp: Date;
}

export enum Status {
    InAlert = "inAlert",
    InDowntime = "inDowntime",
    InOperation = "inOperation",
    PlannedStop = "plannedStop",
    UnplannedStop = "unplannedStop",
}

export interface Metrics {
    lastUptimeAt: Date;
    totalCollectsUptime: number;
    totalUptime: number;
}

export interface Specifications {
    maxTemp: number;
    power?: number;
    rpm?: number | null;
}

export interface Company {
    id: number;
    name: string;
}

export interface Unit {
    companyId: number;
    id: number;
    name: string;
}

export interface User {
    companyId: number;
    email: string;
    id: number;
    name: string;
    unitId: number;
}

export interface Workorder {
    assetId: number;
    assignedUserIds: number[];
    checklist: Checklist[];
    description: string;
    id: number;
    priority: string;
    status: string;
    title: string;
}

export interface Checklist {
    completed: boolean;
    task: string;
}

export type actionType = {
    id: number,
    type: string
}

export type MenuItem = {
    label: string,
    key: string,
    icon: JSX.Element,
}

