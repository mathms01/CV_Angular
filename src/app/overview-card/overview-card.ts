export class OverviewCard {
    title?: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
    picture?: string;

    /**
     *
     */
    constructor(title : string, subtitle: string, description : string, tags : string[], picture : string) {
      this.title = title;
      this.subtitle = subtitle;
      this.description = description;
      this.tags = tags;
      this.picture = picture;
    }
  }