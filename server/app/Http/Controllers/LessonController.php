<?php

namespace App\Http\Controllers;

use App\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function create(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required|string|max:256',
            'link' => 'required|string|max:512',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ]);
        }
        $model = new Lesson();
        $model->name = $request->get('name');
        $model->link = $request->get('link');
        $model->save();

        return response()->json([
            'message' => 'Lesson created Successfully',
            'status' => 'success',
        ]);
    }

    public function readall()
    {
        $models = Lesson::query()->get();
        return $models;
    }

    public function read($id)
    {
        $model = Lesson::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => "Lesson (ID:$id) does not exist",
                'status' => 'fail',
            ]);
        }
        return $model;
    }

    public function update(Request $request, $id)
    {
        $model = Lesson::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => "Lesson (ID:$id) does not exist",
                'status' => 'fail',
            ]);
        }
        $model->name = $request->get('name');
        $model->link = $request->get('link');
        $model->save();

        return response()->json([
            'message' => "Lesson (ID:$id) Updated Successfully",
            'status' => 'success',
        ]);
    }

    public function delete($id)
    {
        $model = Lesson::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => "Lesson (ID:$id) does not exist",
                'status' => 'fail',
            ]);
        }
        $model->delete();

        return response()->json([
            'message' => "Lesson (ID:$id) Deleted Successfully",
            'status' => 'success',
        ]);
    }

}
