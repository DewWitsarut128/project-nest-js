import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepostitory: Repository<Todo>
  ){}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepostitory.save(createTodoDto);
  }

  findAll() {
    return this.todoRepostitory.find();
  }

  findOne(id: number) {
    return this.todoRepostitory.findBy({
      id:id
    })
  }

  update(id: number, updateTodoDto: any) {
    return this.todoRepostitory.save({
      id:id,
      title:updateTodoDto.title,
      user_name:updateTodoDto.user_name,
      status:updateTodoDto.status,
    })
  }

  remove(id: number) {
    return this.todoRepostitory.delete(id);
  }
}
