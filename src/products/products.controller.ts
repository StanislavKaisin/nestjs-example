import { Header, Req, Res } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('hello');
    return 'getAll';
  }

  // get param using decorator
  /*
  @Get(':id')
  getOne(@Param() params){
    return 'getOne ' +params.id
  }
*/

  // express
  /*
app.use((req, res, next) => {
  //
  res.status(201).end('hello')
})
*/

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cach-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return `Title=${createProductDto.title}, Price=${createProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //
    return `Remove: ${id}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    //
    return `Update: ${id}`;
  }
}
