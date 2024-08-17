import React from "react";

export const AuthTopContent: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center text-neutral-900 mb-8">
      <h1 className="font-bold sm:font-black leading-7 sm:leading-12 text-lg sm:text-3xl">
        {title}
      </h1>
      <p className="font-medium leading-5.5 sm:leading-6 text-sm sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};
