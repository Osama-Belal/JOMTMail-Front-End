export class MailDTO{
    id!: string;
    from!: string;
    to!: string;
    subject!: string;
    content!: string;
    timestamp!: string;
    state!: string;
    isStarred!: boolean;
    priority!: number;
    senderID!: string;
    receiverID!: string;
}