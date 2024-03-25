import data from '@/data/footer.json';

export const Footer = () => {
  return (
    <footer className="text-center uppercase leading-[1.17] xl:text-base xl:leading-[1.19]">
      <span>{data.copyrights.label}</span>
    </footer>
  );
};
