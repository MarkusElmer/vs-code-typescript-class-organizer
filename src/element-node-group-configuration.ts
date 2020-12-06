import { MemberType } from "./member-type";
import { MemberReorder } from "./member-reorder";

export class ElementNodeGroupConfiguration
{
    // #region Properties (4)

    public caption: string = "";
    public memberTypes: MemberType[] = [];
    public memberReorder: MemberReorder = MemberReorder.none;

    // #endregion Properties (4)
}