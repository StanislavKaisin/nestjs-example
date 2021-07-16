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
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {
    //
  }
  // express style
  /*
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('hello');
    return 'getAll';
  }

  */

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
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(): Promise<Product[]> {
    // return 'getAll';
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    // return 'getOne ' + id;
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  // @Header('Cach-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    // return `Title=${createProductDto.title}, Price=${createProductDto.price}`;
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    //
    // return `Remove: ${id}`;
    return this.productService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    //
    // return `Update: ${id}`;
    return this.productService.update(id, updateProductDto);
  }
}
