import data from '@/data/footer.json';
export const Footer = () => {
  return (
    <footer className="pt-[60px] text-center uppercase leading-[1.17] md:pt-[80px] xl:pt-[120px] xl:text-base xl:leading-[1.19]">
      <span>{data.copyrights.label}</span>
    </footer>
  );
};
