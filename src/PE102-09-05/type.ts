export type Command = {
    cmd: string;
    args: string;
    rslt: string;
}

export type CMDType = {
    success: boolean;
    command?: Command;
}