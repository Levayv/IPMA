<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Article::query()->get();
        return $models;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ]);
        }
        $model = new Article();
        $model->title = $request->get('title');
        $model->description = $request->get('description');
        $model->save();

        return response()->json([
            'message' => 'Post Saved Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        $model = Post::query()->find($id);
//        if (!$model) {
//            return response()->json([
//                'message' => 'Post does not exist',
//                'status' => 'fail',
//            ]);
//        }
        return response()->json([
                'items' => 'Lorem ipsum',
            ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Article::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        $model->title = $request->get('title');
        $model->description = $request->get('description');
        $model->save();

        return response()->json([
            'message' => 'Post Updated Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Article::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        $model->delete();

        return response()->json([
            'message' => 'Post Deleted Successfully',
            'status' => 'success',
        ]);
    }
}
