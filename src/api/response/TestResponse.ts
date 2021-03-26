import { MaxLength, IsBoolean } from "class-validator";

export class TestResponse {
    @MaxLength(10)
    public someTesting: string;

    @IsBoolean()
    public isWow?: boolean | null;
}
