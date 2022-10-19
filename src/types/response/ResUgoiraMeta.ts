export class ResUgoiraMeta{
    frames:Array<Frame>;
    mimeType:string;
    originalSrc:string;
    src:string;

    constructor(props: { mime_type: string; originalSrc: string; src: string; frames: any[]; }) {
        this.mimeType = props.mime_type
        this.originalSrc = props.originalSrc
        this.src = props.src
        this.frames = props.frames.map(i=>new Frame(i))
    }
}

export class Frame{
    delay:number;
    file:string;

    constructor(props: { delay: number; file: string; }) {
        this.delay = props.delay
        this.file = props.file
    }

}