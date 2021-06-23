import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string{
    return 'getAll'
  }

  // get param using decorator
  /*
  @Get(':id')
  getOne(@Param() params){
    return 'getOne ' +params.id
  }
*/
  @Get(':id')
  getOne(@Param('id') id: string): string{
    return 'getOne ' +id
  }

@Post()
  create(@Body() body){
    //
  }

  @Delete()
  remove(){
    //
  }

  @Put()
  update(){
    //
  }
}
