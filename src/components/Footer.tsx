export default function Footer() {
  return (
    <footer className="flex justify-between w-[972px] items-center text-[11px] opacity-30 mt-[12px]">
      <small className="text-sm">
        &copy;{new Date().getFullYear()} Copyright by Khairul Alam
      </small>

      <p className="text-sm">
        Version <b>1.0</b>
      </p>
    </footer>
  );
}
