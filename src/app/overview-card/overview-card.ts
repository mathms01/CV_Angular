export class OverviewCard {
    title?: string;
    subtitle?: string;
    description?: string;
    tags?: string[];

    /**
     *
     */
    constructor(title : string, subtitle: string, description : string, tags : string[]) {
      this.title = title;
      this.subtitle = subtitle;
      this.description = description;
      this.tags = tags;
    }
  }