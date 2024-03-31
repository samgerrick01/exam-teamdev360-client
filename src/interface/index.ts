export interface DataInterface {
  id: string;
  name: string;
  type: string;
  test: boolean;
  url: string;
  locale: string;
  externalLinks?: {
    youtube: [
      {
        url: string;
      },
      {
        url?: string;
      }
    ];
    twitter: [
      {
        url: string;
      }
    ];
    itunes: [
      {
        url: string;
      }
    ];
    lastfm: [
      {
        url: string;
      }
    ];
    facebook: [
      {
        url: string;
      }
    ];
    wiki: [
      {
        url: string;
      }
    ];
    spotify: [
      {
        url: string;
      }
    ];
    musicbrainz: [
      {
        id: string;
      }
    ];
    instagram: [
      {
        url: string;
      }
    ];
    homepage: [
      {
        url: string;
      },
      { url?: string }
    ];
  };
  images: ImageInterface[];
  classifications: ClassificationsInterface[];
  upcomingEvents: {
    ticketnet: number;
    'mfx-nl': number;
    'mfx-de': number;
    _total: number;
    _filtered: number;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface ImageInterface {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface ClassificationsInterface {
  primary: boolean;
  segment: {
    id: string;
    name: string;
  };
  genre: {
    id: string;
    name: string;
  };
  subGenre: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  subType: {
    id: string;
    name: string;
  };
  family: boolean;
}
