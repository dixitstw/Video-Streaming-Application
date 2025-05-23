import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose, { Document } from "mongoose";

export type VideoDocument = Video & Document
@Schema()
export class Video {

    @Prop()
    title: string;

    @Prop()
    video: string;

    @Prop()
    coverImage: string;

    @Prop({defalult: Date.now()})
    uploadDate: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User"})
    createdBy: User
}

export const VideoSchema = SchemaFactory.createForClass(Video)