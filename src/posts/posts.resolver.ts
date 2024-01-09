import { Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';

@Resolver()
export class PostsResolver {

    constructor( private postsService: PostsService ) {}
    @Query((returns) => [Post]) // return array of Post: [Post]
    posts() {
        return this.postsService.findAll();
    }
}
