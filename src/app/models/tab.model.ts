import { Call } from "./call.model"

export interface Tab{
    id: string,
    number: string,
    state: string,
    viewstate: string,
    call: Call
}

