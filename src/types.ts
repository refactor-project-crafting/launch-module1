export type NavigationProps = {
  previousLink?: string;
  previousLinkText?: string;
  nextLink?: string;
  nextLinkText?: string;
};

export type ComponentProps = {
  isDeep?: boolean;
  navigation?: NavigationProps;
};

export type LoginProps = {
  isLogged: boolean;
};
