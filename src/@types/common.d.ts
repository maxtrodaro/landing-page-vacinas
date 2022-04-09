declare type HasWebpType = {
  webp: any;
};

declare interface PromiseConstructor {
  allSettled(
    promises: Array<Promise<any>>
  ): Promise<Array<{ status: 'fulfilled' | 'rejected'; value?: any; reason?: any }>>;
}

declare interface OptionType {
  value: string;
  label: string;
}

declare interface ImageWebpType {
  jpg: string;
  webp: string;
}

declare interface ICoordinates {
  latitude: string;
  longitude: string;
}

declare interface IAPIIcon {
  iconType: string;
  iconName: string;
}

declare interface IAddress {
  id: string;
  name?: string;
  phone?: string;
  zipcode: string;
  streetName: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
    initials: string;
  };
  country: {
    id: string;
    name: string;
  };
}
