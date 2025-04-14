// bounded props
export type BoundedProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  width?: 'wide' | 'compact' | 'small';
};

// Subtitle
export type SubtitleProps = {
  as?: 'h3';
  children: React.ReactNode;
  className?: string;
};

// Title
export type TitleProps = {
  as: 'h1' | 'h2';
  children: React.ReactNode;
  size?: 'lg' | 'sm';
  className?: string;
};

// paragraph
export type ParagraphProps = {
  as?: 'p';
  children: React.ReactNode;
  className?: string;
};
