import * as fs from 'fs';
import { spawn } from 'child_process';
import { Command, CMDType } from './type';

export const cmd = (cmd: string, args: string, cd:(err: string|undefined, res: CMDType|undefined) => void) => {
    const exe = spawn(cmd, args.split(','));
    let cmd_output = '';
    exe.stdout.on('data', (piece) => cmd_output += piece);
    exe.on('close', () => {
        const cmd_array = cmd_output.split(/\s+/);
        
    });
};