import { Content } from "@google/generative-ai";

export function createContent(text: string): Content[] {
    return [
        {
            role: 'user',
            parts: [
                {
                    text,
                },
            ],
        },
    ];
}
