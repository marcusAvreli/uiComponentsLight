import { GroupDescription } from "./GroupDescription";
import { ICollectionView } from "./interface/ICollectionView";
import { Aggregate } from "../enum/Aggregate";
/**
 * Represents a group created by a @see:CollectionView object based on
 * its @see:groupDescriptions property.
 */
export declare class CollectionViewGroup {
    _gd: GroupDescription;
    _name: string;
    _path: string;
    _level: number;
    _isBottomLevel: boolean;
    _groups: CollectionViewGroup[];
    _items: any[];
    /**
     * Initializes a new instance of a @see:CollectionViewGroup.
     *
     * @param groupDescription @see:GroupDescription that owns the new group.
     * @param name Name of the new group.
     * @param level Level of the new group.
     * @param isBottomLevel Whether this group has any subgroups.
     */
    constructor(groupDescription: GroupDescription, name: string, level: number, isBottomLevel: boolean);
    readonly name: string;
    readonly level: number;
    readonly isBottomLevel: boolean;
    readonly items: any[];
    readonly groups: CollectionViewGroup[];
    readonly groupDescription: GroupDescription;
    /**
     * Calculates an aggregate value for the items in this group.
     *
     * @param aggType Type of aggregate to calculate.
     * @param binding Property to aggregate on.
     * @param view CollectionView that owns this group.
     * @return The aggregate value.
     */
    getAggregate(aggType: Aggregate, binding: string, view?: ICollectionView): any;
}
