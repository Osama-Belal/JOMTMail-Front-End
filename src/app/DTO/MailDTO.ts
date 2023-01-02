export class MailDTO{
    mailId: string = "";
    from: string = "";
    to: string = "";
    subject: string = "";
    content: string = "";
    timestamp: string = "";
    state: string = 'mail';
    isStarred: boolean = false;
    priority: number = 4;

}