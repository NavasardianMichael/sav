/// <reference types="react-scripts" />
declare namespace Email {
  type Attachment =
    | {
        name: string;
        path: string;
      }
    | {
        name: string;
        data: string; // base64 format
      };

  interface EmailData {
    SecureToken: string;
    To: string | string[];
    From: string;
    Subject: string;
    Body: string;
    Attachments?: Attachment[];
  }

  function send(email: EmailData): Promise<string>;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}