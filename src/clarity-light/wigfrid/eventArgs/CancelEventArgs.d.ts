import { EventArgs } from "./EventArgs";
/**
 * Provides arguments for cancellable events.
 */
export declare class CancelEventArgs extends EventArgs {
    /**
     * Gets or sets a value that indicates whether the event should be canceled.
     */
    cancel: boolean;
}
