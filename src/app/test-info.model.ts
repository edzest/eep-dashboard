export interface TestInfo {
    id: number;
    title: string;
    instructions: string;
    timings?: {
        breakDuration: number;
        sectionTimings: {
            [sectionId: number]: number;
        }
    }
}
