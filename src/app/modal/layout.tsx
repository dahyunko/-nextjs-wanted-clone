import ModalProvider from '@/modal/modal-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ModalProvider>{children}</ModalProvider>
    </section>
  );
}
