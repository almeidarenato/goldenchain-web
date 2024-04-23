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
              <div className="flex-column w-full lg:w-56">
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
          <div className="mt-4">
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] max-w-screen-xl rounded-lg border"
            >
              <ResizablePanel>
                <Table className="table-auto">
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Ouro</TableHead>
                    <TableHead>Joias</TableHead>
                    <TableHead>Metais</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Arquivos</TableHead>
                    <TableHead>GeoLocalização</TableHead>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell> 1 </TableCell>
                      <TableCell> 18/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 2 gr </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> Peça de Jóia </TableCell>
                      <TableCell>
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="#"
                        >
                          Download
                        </a>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="http://maps.google.com/?ie=UTF8&hq=&ll=35.028028,-106.536655&z=13"
                        >
                          35.028028,-106.536655
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 2 </TableCell>
                      <TableCell> 19/01/2024 </TableCell>
                      <TableCell> 0,423 gr </TableCell>
                      <TableCell> 1.5 gr </TableCell>
                      <TableCell> 0,223 gr </TableCell>
                      <TableCell> Peça de Jóia </TableCell>
                      <TableCell>
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="#"
                        >
                          Download
                        </a>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="http://maps.google.com/?ie=UTF8&hq=&ll=35.028028,-106.536655&z=13"
                        >
                          35.028028,-106.536655
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 2 </TableCell>
                      <TableCell> 19/01/2024 </TableCell>
                      <TableCell> 0,423 gr </TableCell>
                      <TableCell> 1.5 gr </TableCell>
                      <TableCell> 0,223 gr </TableCell>
                      <TableCell> Peça de Jóia </TableCell>
                      <TableCell>
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="#"
                        >
                          Download
                        </a>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <a
                          className="hover:bg-slate-200 hover:dark:bg-slate-600"
                          href="http://maps.google.com/?ie=UTF8&hq=&ll=35.028028,-106.536655&z=13"
                        >
                          35.028028,-106.536655
                        </a>
                      </TableCell>
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
