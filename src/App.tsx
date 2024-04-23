import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/ui/table";
import { ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header/header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <div className="p-2 max-w-4xl mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-center">GoldChain</h1>
        <div>
          <div className="flex-nowrap border rounded-lg">
            <div className="flex flex-wrap p-3 gap-3 lg:flex-nowrap">
              <div className="flex-column w-full lg:w-96">
                <Label htmlFor="endereco">Endereço</Label>
                <Input type="text" id="endereco" placeholder="Endereço" />
              </div>
              <div className="flex-column w-48 lg:w-56">
                <Label htmlFor="codigotransacao">Código da Transação</Label>
                <Input
                  type="text"
                  id="codigotransacao"
                  placeholder="Código da Transação"
                />
              </div>
            </div>
            <div className="flex justify-start p-3 gap-3 ">
              <Button className="w-full lg:w-40" variant="outline">
                Detalhes
              </Button>
              <Button className="w-full lg:w-40" variant="default">
                Ler QRCode
              </Button>
            </div>
          </div>
          <div className="flex-nowrap border rounded-lg mt-3">
            <div className="flex flex-wrap p-3 gap-3 lg:flex-nowrap">
              <span className="font-bold">Nome:</span> Cássio Serra
            </div>
            <div>
              <div className="flex flex-wrap p-3 gap-3 lg:flex-nowrap">
                <Button className="w-full lg:w-40" variant="outline">
                  Mostrar Perfil
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] max-w-screen-xl rounded-lg border"
            >
              <ResizablePanel>
                <Table className="table-auto">
                  <TableHeader>
                    <TableHead>Data</TableHead>
                    <TableHead>AU</TableHead>
                    <TableHead>PL</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Token</TableHead>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell> 18/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 0,02 gr </TableCell>
                      <TableCell> Jóia </TableCell>
                      <TableCell> 1e2309132009321x2e </TableCell>
                      <TableCell> ??? </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 19/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 0,02 gr </TableCell>
                      <TableCell> Jóia </TableCell>
                      <TableCell> 1e2309132009321x2e </TableCell>
                      <TableCell> ??? </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 20/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 0,02 gr </TableCell>
                      <TableCell> Jóia </TableCell>
                      <TableCell> 1e2309132009321x2e </TableCell>
                      <TableCell> ??? </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
