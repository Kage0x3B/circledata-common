import { MaxLength } from "class-validator";

export class TestRequestQueryParams {
    @MaxLength(10)
    name: string;
}
