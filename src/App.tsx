import { CopyIcon } from "@radix-ui/react-icons";
import { truncate } from "../src/lib/truncateEthereum";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
            <div>
              <div className="flex flex-wrap p-3 gap-3 lg:flex-nowrap">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full lg:w-40" variant="outline">
                      Cássio Serra
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Profile</DialogTitle>
                      <DialogDescription>Consulta ao Perfil</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-5 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input
                          id="name"
                          value="Cássio Serra"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-5 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Usuário
                        </Label>
                        <Input
                          id="username"
                          value="@cassioserra"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-5 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                          Endereço
                        </Label>
                        <Input
                          id="address"
                          value="0xb794f5ea0ba39494ce839613fffba74279579268"
                          className="col-span-3"
                        />
                        <Button type="submit" size="sm" className="px-3">
                          <span className="sr-only">Copy</span>
                          <CopyIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="submit">Fechar</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
                      <TableCell>
                        {" "}
                        {truncate(
                          "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
                        )}{" "}
                      </TableCell>
                      <TableCell> ??? </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 19/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 0,02 gr </TableCell>
                      <TableCell> Jóia </TableCell>
                      <TableCell>
                        {" "}
                        {truncate("0xb794f5ea0ba39494ce839613fffba74279579268")}
                      </TableCell>
                      <TableCell> ??? </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> 20/01/2024 </TableCell>
                      <TableCell> 0,483 gr </TableCell>
                      <TableCell> 0,02 gr </TableCell>
                      <TableCell> Jóia </TableCell>
                      <TableCell>
                        {" "}
                        {truncate(
                          "0x1e3f83f881b440c183e7ba99177c93bd9cd34025eb0c06dbf331d430faa2cfdd"
                        )}
                      </TableCell>
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
