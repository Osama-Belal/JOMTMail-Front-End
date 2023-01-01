export class UserDTO {
    id!: string;
    userName!: string;
    email!: string;
    password!: string;
    requestState!: string;
    requestMessage!: string;
    folderNames!: Map<String, String>
    inboxId!: String;
}