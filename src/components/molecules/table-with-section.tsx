"use client";

import {
  Table,
  TableBody,
  //   TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TCells, THeads, TRows, TTableData, TTableTabs } from "@/lib/type";
import clsx from "clsx";

const TableWithSection = ({ data, tabs }: { data: TTableData, tabs?: TTableTabs[] }) => {
  const { thead, tbody } = data;
  return (
    <section className="container flex flex-col items-center justify-center gap-[40px]">
      {tabs ? (
        <Tabs defaultValue={tabs[0].value}>
          <TabsList>
            {tabs.map((item: TTableTabs) => {
              const { value, text } = item;
              return (
                <TabsTrigger key={value} value={value}>
                  {text}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      ) : null}

      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {thead.map((heading: THeads) => {
              const { id, key, th, subTh } = heading;
              return (
                <TableHead
                  key={id + key}
                  className="w-[100px] [&>*]:text-center border-x border-t py-[16px] space-y-[4px]"
                >
                  <p className="font-bold">{th}</p>
                  <p>{subTh}</p>
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tbody.map((row: TRows) => {
            const { id, rowAsSection, cells } = row;
            return (
              <TableRow key={id} className={clsx({ "border-x": rowAsSection })}>
                {rowAsSection ? (
                  <TableCell className="font-semibold text-center">
                    {cells[0].value}
                  </TableCell>
                ) : (
                  cells.map((cell: TCells) => {
                    const { id, key, value } = cell;
                    return (
                      <TableCell key={id + key} className="text-center border">
                        {value}
                      </TableCell>
                    );
                  })
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableWithSection;
