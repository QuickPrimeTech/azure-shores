import { WithChildrenAndClass } from "@/types";
import { cn } from "@/lib/utils";

const Section = ({ children, className }: WithChildrenAndClass) => {
  return (
    <section
      className={cn(
        "section-x section-y flex flex-col items-center justify-center gap-12",
        className
      )}
    >
      {children}
    </section>
  );
};

const Header = ({ children, className }: WithChildrenAndClass) => {
  return (
    <div className={cn("space-y-2 text-center", className)}>{children}</div>
  );
};

const H1 = ({ children, className, ...props }: WithChildrenAndClass) => {
  return (
    <h1
      className={cn(
        "font-bold text-3xl md:text-4xl lg:text-6xl font-primary",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, className, ...props }: WithChildrenAndClass) => {
  return (
    <h2
      className={cn(
        "font-bold font-primary text-3xl md:text-3xl lg:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, className }: WithChildrenAndClass) => {
  return (
    <h3 className={cn("text-muted-foreground max-w-3xl mx-auto", className)}>
      {children}
    </h3>
  );
};

const SubTitle = ({ children, className, ...props }: WithChildrenAndClass) => {
  return (
    <p className={cn("text-xl text-gray-600 max-w-2xl", className)} {...props}>
      {children}
    </p>
  );
};

export { Section, Header, H1, H2, H3, SubTitle };
