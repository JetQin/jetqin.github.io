webpackJsonp([33],{1297:function(n,s){n.exports={content:["article",["h2","\u4ec0\u4e48\u662fgRPC"],["p",["code","gRPC"],"\u5ba2\u6237\u7aef\u5982\u540c\u8c03\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u53ef\u4ee5\u8c03\u7528\u4e0d\u5728\u540c\u4e00\u53f0\u7269\u7406\u673a\u5668\u4e0a\u7684\u8fdc\u7aef\u670d\u52a1\u5668\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528",["code","gPRC"],"\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u521b\u5efa\u5206\u5e03\u5f0f\u5e94\u7528\u548c\u670d\u52a1\u3002\n",["code","gRPC"],"\u65e8\u5728\u5b9a\u4e49\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\u53c2\u6570\u88ab\u8fdc\u7a0b\u8c03\u7528\u8fd4\u56de\u786e\u5b9a\u7684\u7c7b\u578b\uff0c\u5728\u670d\u52a1\u5668\u7aef\u53ea\u9700\u8981\u5b9e\u73b0\u63a5\u53e3\u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002\u5ba2\u6237\u7aef\u901a\u8fc7",["code","stub"],"\u5b9e\u73b0\n\u8c03\u7528\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528\u3002gRPC\u53ef\u4ee5\u8de8\u8bed\u8a00\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u4f7f\u7528Java,\u5728\u5ba2\u6237\u7aef\u4f7f\u7528python\uff0cgo\uff0cruby\u7b49\u3002"],["h2","Protocol Buffer"],["p",["code","Protocol buffer"],"\u662f\u4e00\u4e2a\u7075\u6d3b\u9ad8\u6548\u7684\u5e8f\u5217\u5316\u7ed3\u6784\u6570\u636e\u7684\u5de5\u5177\uff0c\u4f60\u53ea\u9700\u5b9a\u4e49\u4e00\u6b21\u4f60\u7684\u6570\u636e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u8bed\u8a00\u6765\n\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u3002"],["p","message.proto"],["pre",{lang:null,highlighted:'syntax <span class="token operator">=</span> <span class="token string">"proto2"</span><span class="token comment" spellcheck="true">;</span>\npackage tutorial<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> The greeter service definition<span class="token punctuation">.</span>\nservice Greeter {\n  <span class="token operator">/</span><span class="token operator">/</span> Sends a greeting\n  rpc SayHello <span class="token punctuation">(</span>HelloRequest<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>HelloReply<span class="token punctuation">)</span> {}\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> The request message containing the user\'s name<span class="token punctuation">.</span>\nmessage HelloRequest {\n  required string name <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> The response message containing the greetings\nmessage HelloReply {\n  required string message <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n}'},["code",'syntax = "proto2";\npackage tutorial;\n\n// The greeter service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  required string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  required string message = 1;\n}']],["p","\u6267\u884c\u5982\u4e0b\u547d\u4ee4",["code","protoc --python_out=./  ./message.proto"]," \u4f1a\u751f\u6210\u5bf9\u5e94\u7684",["code","message_pb2"],"\u4ee3\u7801\uff0c\u5f53\u7136\u8fd8\u652f\u6301\n",["code","Java"],",",["code","Go"],", ",["code","Dart"],", ",["code","C++"],"\u7b49\u5176\u4ed6\u8bed\u8a00"],["pre",{lang:null,highlighted:'# Generated by the protocol buffer compiler<span class="token punctuation">.</span>  <span class="token keyword">DO</span> <span class="token operator">NOT</span> EDIT!\n# source<span class="token punctuation">:</span> message<span class="token punctuation">.</span>proto\n\nfrom google<span class="token punctuation">.</span>protobuf import descriptor as _descriptor\nfrom google<span class="token punctuation">.</span>protobuf import message as _message\nfrom google<span class="token punctuation">.</span>protobuf import reflection as _reflection\nfrom google<span class="token punctuation">.</span>protobuf import descriptor_pb2\n# @@<span class="token function">protoc_insertion_point</span><span class="token punctuation">(</span>imports<span class="token punctuation">)</span>\n\n\n\n\nDESCRIPTOR <span class="token operator">=</span> _descriptor<span class="token punctuation">.</span><span class="token function">FileDescriptor</span><span class="token punctuation">(</span>\n  name<span class="token operator">=</span><span class="token string">\'message.proto\'</span><span class="token punctuation">,</span>\n  package<span class="token operator">=</span><span class="token string">\'tutorial\'</span><span class="token punctuation">,</span>\n  serialized_pb<span class="token operator">=</span><span class="token string">\'\\n\\rmessage.proto\\x12\\x08tutorial\\"\\x1c\\n\\x0cHelloRequest\\x12\\x0c\\n\\x04name\\x18\\x01 \\x02(\\t\\"\\x1d\\n\\nHelloReply\\x12\\x0f\\n\\x07message\\x18\\x01 \\x02(\\t2E\\n\\x07Greeter\\x12:\\n\\x08SayHello\\x12\\x16.tutorial.HelloRequest\\x1a\\x14.tutorial.HelloReply\\"\\x00\'</span><span class="token punctuation">)</span>\n\n\n\n\n_HELLOREQUEST <span class="token operator">=</span> _descriptor<span class="token punctuation">.</span><span class="token function">Descriptor</span><span class="token punctuation">(</span>\n  name<span class="token operator">=</span><span class="token string">\'HelloRequest\'</span><span class="token punctuation">,</span>\n  full_name<span class="token operator">=</span><span class="token string">\'tutorial.HelloRequest\'</span><span class="token punctuation">,</span>\n  filename<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  file<span class="token operator">=</span>DESCRIPTOR<span class="token punctuation">,</span>\n  containing_type<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  fields<span class="token operator">=</span><span class="token punctuation">[</span>\n    _descriptor<span class="token punctuation">.</span><span class="token function">FieldDescriptor</span><span class="token punctuation">(</span>\n      name<span class="token operator">=</span><span class="token string">\'name\'</span><span class="token punctuation">,</span> full_name<span class="token operator">=</span><span class="token string">\'tutorial.HelloRequest.name\'</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>\n      number<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> type<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span> cpp_type<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>\n      has_default_value<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> default_value<span class="token operator">=</span><span class="token function">unicode</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      message_type<span class="token operator">=</span>None<span class="token punctuation">,</span> enum_type<span class="token operator">=</span>None<span class="token punctuation">,</span> containing_type<span class="token operator">=</span>None<span class="token punctuation">,</span>\n      is_extension<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> extension_scope<span class="token operator">=</span>None<span class="token punctuation">,</span>\n      options<span class="token operator">=</span>None<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extensions<span class="token operator">=</span><span class="token punctuation">[</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  nested_types<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  enum_types<span class="token operator">=</span><span class="token punctuation">[</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  options<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  is_extendable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>\n  extension_ranges<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  serialized_start<span class="token operator">=</span><span class="token number">27</span><span class="token punctuation">,</span>\n  serialized_end<span class="token operator">=</span><span class="token number">55</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n\n\n_HELLOREPLY <span class="token operator">=</span> _descriptor<span class="token punctuation">.</span><span class="token function">Descriptor</span><span class="token punctuation">(</span>\n  name<span class="token operator">=</span><span class="token string">\'HelloReply\'</span><span class="token punctuation">,</span>\n  full_name<span class="token operator">=</span><span class="token string">\'tutorial.HelloReply\'</span><span class="token punctuation">,</span>\n  filename<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  file<span class="token operator">=</span>DESCRIPTOR<span class="token punctuation">,</span>\n  containing_type<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  fields<span class="token operator">=</span><span class="token punctuation">[</span>\n    _descriptor<span class="token punctuation">.</span><span class="token function">FieldDescriptor</span><span class="token punctuation">(</span>\n      name<span class="token operator">=</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> full_name<span class="token operator">=</span><span class="token string">\'tutorial.HelloReply.message\'</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>\n      number<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> type<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span> cpp_type<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>\n      has_default_value<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> default_value<span class="token operator">=</span><span class="token function">unicode</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      message_type<span class="token operator">=</span>None<span class="token punctuation">,</span> enum_type<span class="token operator">=</span>None<span class="token punctuation">,</span> containing_type<span class="token operator">=</span>None<span class="token punctuation">,</span>\n      is_extension<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> extension_scope<span class="token operator">=</span>None<span class="token punctuation">,</span>\n      options<span class="token operator">=</span>None<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extensions<span class="token operator">=</span><span class="token punctuation">[</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  nested_types<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  enum_types<span class="token operator">=</span><span class="token punctuation">[</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  options<span class="token operator">=</span>None<span class="token punctuation">,</span>\n  is_extendable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>\n  extension_ranges<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  serialized_start<span class="token operator">=</span><span class="token number">57</span><span class="token punctuation">,</span>\n  serialized_end<span class="token operator">=</span><span class="token number">86</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n\nDESCRIPTOR<span class="token punctuation">.</span>message_types_by_name<span class="token punctuation">[</span><span class="token string">\'HelloRequest\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> _HELLOREQUEST\nDESCRIPTOR<span class="token punctuation">.</span>message_types_by_name<span class="token punctuation">[</span><span class="token string">\'HelloReply\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> _HELLOREPLY\n\nclass <span class="token function">HelloRequest</span><span class="token punctuation">(</span>_message<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  __metaclass__ <span class="token operator">=</span> _reflection<span class="token punctuation">.</span>GeneratedProtocolMessageType\n  DESCRIPTOR <span class="token operator">=</span> _HELLOREQUEST\n\n  # @@<span class="token function">protoc_insertion_point</span><span class="token punctuation">(</span>class_scope<span class="token punctuation">:</span>tutorial<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">)</span>\n\nclass <span class="token function">HelloReply</span><span class="token punctuation">(</span>_message<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  __metaclass__ <span class="token operator">=</span> _reflection<span class="token punctuation">.</span>GeneratedProtocolMessageType\n  DESCRIPTOR <span class="token operator">=</span> _HELLOREPLY\n\n  # @@<span class="token function">protoc_insertion_point</span><span class="token punctuation">(</span>class_scope<span class="token punctuation">:</span>tutorial<span class="token punctuation">.</span>HelloReply<span class="token punctuation">)</span>\n\n\n# @@<span class="token function">protoc_insertion_point</span><span class="token punctuation">(</span>module_scope<span class="token punctuation">)</span>'},["code","# Generated by the protocol buffer compiler.  DO NOT EDIT!\n# source: message.proto\n\nfrom google.protobuf import descriptor as _descriptor\nfrom google.protobuf import message as _message\nfrom google.protobuf import reflection as _reflection\nfrom google.protobuf import descriptor_pb2\n# @@protoc_insertion_point(imports)\n\n\n\n\nDESCRIPTOR = _descriptor.FileDescriptor(\n  name='message.proto',\n  package='tutorial',\n  serialized_pb='\\n\\rmessage.proto\\x12\\x08tutorial\\\"\\x1c\\n\\x0cHelloRequest\\x12\\x0c\\n\\x04name\\x18\\x01 \\x02(\\t\\\"\\x1d\\n\\nHelloReply\\x12\\x0f\\n\\x07message\\x18\\x01 \\x02(\\t2E\\n\\x07Greeter\\x12:\\n\\x08SayHello\\x12\\x16.tutorial.HelloRequest\\x1a\\x14.tutorial.HelloReply\\\"\\x00')\n\n\n\n\n_HELLOREQUEST = _descriptor.Descriptor(\n  name='HelloRequest',\n  full_name='tutorial.HelloRequest',\n  filename=None,\n  file=DESCRIPTOR,\n  containing_type=None,\n  fields=[\n    _descriptor.FieldDescriptor(\n      name='name', full_name='tutorial.HelloRequest.name', index=0,\n      number=1, type=9, cpp_type=9, label=2,\n      has_default_value=False, default_value=unicode(\"\", \"utf-8\"),\n      message_type=None, enum_type=None, containing_type=None,\n      is_extension=False, extension_scope=None,\n      options=None),\n  ],\n  extensions=[\n  ],\n  nested_types=[],\n  enum_types=[\n  ],\n  options=None,\n  is_extendable=False,\n  extension_ranges=[],\n  serialized_start=27,\n  serialized_end=55,\n)\n\n\n_HELLOREPLY = _descriptor.Descriptor(\n  name='HelloReply',\n  full_name='tutorial.HelloReply',\n  filename=None,\n  file=DESCRIPTOR,\n  containing_type=None,\n  fields=[\n    _descriptor.FieldDescriptor(\n      name='message', full_name='tutorial.HelloReply.message', index=0,\n      number=1, type=9, cpp_type=9, label=2,\n      has_default_value=False, default_value=unicode(\"\", \"utf-8\"),\n      message_type=None, enum_type=None, containing_type=None,\n      is_extension=False, extension_scope=None,\n      options=None),\n  ],\n  extensions=[\n  ],\n  nested_types=[],\n  enum_types=[\n  ],\n  options=None,\n  is_extendable=False,\n  extension_ranges=[],\n  serialized_start=57,\n  serialized_end=86,\n)\n\nDESCRIPTOR.message_types_by_name['HelloRequest'] = _HELLOREQUEST\nDESCRIPTOR.message_types_by_name['HelloReply'] = _HELLOREPLY\n\nclass HelloRequest(_message.Message):\n  __metaclass__ = _reflection.GeneratedProtocolMessageType\n  DESCRIPTOR = _HELLOREQUEST\n\n  # @@protoc_insertion_point(class_scope:tutorial.HelloRequest)\n\nclass HelloReply(_message.Message):\n  __metaclass__ = _reflection.GeneratedProtocolMessageType\n  DESCRIPTOR = _HELLOREPLY\n\n  # @@protoc_insertion_point(class_scope:tutorial.HelloReply)\n\n\n# @@protoc_insertion_point(module_scope)"]],["h2","gRPC\u793a\u4f8b"],["p","\u4f7f\u7528",["code","python3 -m grpc_tools.protoc -I./ --python_out=./ --grpc_python_out=./ ./message.proto"],"\u547d\u4ee4\u751f\u6210\npython\u63a5\u53e3\u6587\u4ef6",["code","message_pb2.py"],"\uff0c\u548cgprc\u63a5\u53e3\u6587\u4ef6 ",["code","message_pb2_grpc.py"]],["p",["strong","Server \u7aef"]],["pre",{lang:null,highlighted:'<span class="token string">"""The Python implementation of the GRPC helloworld.Greeter server."""</span>\n\nfrom concurrent import futures\nimport time\nimport logging\n\nimport grpc\n\nimport message_pb2\nimport message_pb2_grpc\n\n_ONE_DAY_IN_SECONDS <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span>\n\n\nclass <span class="token function">Greeter</span><span class="token punctuation">(</span>message_pb2_grpc<span class="token punctuation">.</span>GreeterServicer<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    def <span class="token function">SayHello</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        return message_pb2<span class="token punctuation">.</span><span class="token function">HelloReply</span><span class="token punctuation">(</span>message<span class="token operator">=</span><span class="token string">\'Hello, %s!\'</span> % request<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n\n\ndef <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    server <span class="token operator">=</span> grpc<span class="token punctuation">.</span><span class="token function">server</span><span class="token punctuation">(</span>futures<span class="token punctuation">.</span><span class="token function">ThreadPoolExecutor</span><span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    message_pb2_grpc<span class="token punctuation">.</span><span class="token function">add_GreeterServicer_to_server</span><span class="token punctuation">(</span><span class="token function">Greeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> server<span class="token punctuation">)</span>\n    server<span class="token punctuation">.</span><span class="token function">add_insecure_port</span><span class="token punctuation">(</span><span class="token string">\'[::]:50051\'</span><span class="token punctuation">)</span>\n    server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    try<span class="token punctuation">:</span>\n        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n            time<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>_ONE_DAY_IN_SECONDS<span class="token punctuation">)</span>\n    except KeyboardInterrupt<span class="token punctuation">:</span>\n        server<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">\'__main__\'</span><span class="token punctuation">:</span>\n    logging<span class="token punctuation">.</span><span class="token function">basicConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code","\"\"\"The Python implementation of the GRPC helloworld.Greeter server.\"\"\"\n\nfrom concurrent import futures\nimport time\nimport logging\n\nimport grpc\n\nimport message_pb2\nimport message_pb2_grpc\n\n_ONE_DAY_IN_SECONDS = 60 * 60 * 24\n\n\nclass Greeter(message_pb2_grpc.GreeterServicer):\n\n    def SayHello(self, request, context):\n        return message_pb2.HelloReply(message='Hello, %s!' % request.name)\n\n\ndef serve():\n    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))\n    message_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)\n    server.add_insecure_port('[::]:50051')\n    server.start()\n    try:\n        while True:\n            time.sleep(_ONE_DAY_IN_SECONDS)\n    except KeyboardInterrupt:\n        server.stop(0)\n\n\nif __name__ == '__main__':\n    logging.basicConfig()\n    serve()"]],["p",["strong","Client \u7aef"]],["pre",{lang:null,highlighted:'<span class="token string">"""The Python implementation of the GRPC helloworld.Greeter client."""</span>\n\nfrom __future__ import print_function\nimport logging\n\nimport grpc\n\nimport message_pb2\nimport message_pb2_grpc\n\n\ndef <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    # <span class="token function">NOTE</span><span class="token punctuation">(</span>gRPC Python Team<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is possible on a channel <span class="token operator">and</span> should be\n    # used <span class="token keyword">in</span> circumstances <span class="token keyword">in</span> which the <span class="token keyword">with</span> statement does <span class="token operator">not</span> fit the needs\n    # of the code<span class="token punctuation">.</span>\n    <span class="token keyword">with</span> grpc<span class="token punctuation">.</span><span class="token function">insecure_channel</span><span class="token punctuation">(</span><span class="token string">\'localhost:50051\'</span><span class="token punctuation">)</span> as channel<span class="token punctuation">:</span>\n        stub <span class="token operator">=</span> message_pb2_grpc<span class="token punctuation">.</span><span class="token function">GreeterStub</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>\n        response <span class="token operator">=</span> stub<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span>message_pb2<span class="token punctuation">.</span><span class="token function">HelloRequest</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">\'you\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Greeter client received: "</span> <span class="token operator">+</span> response<span class="token punctuation">.</span>message<span class="token punctuation">)</span>\n\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">\'__main__\'</span><span class="token punctuation">:</span>\n    logging<span class="token punctuation">.</span><span class="token function">basicConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code",'"""The Python implementation of the GRPC helloworld.Greeter client."""\n\nfrom __future__ import print_function\nimport logging\n\nimport grpc\n\nimport message_pb2\nimport message_pb2_grpc\n\n\ndef run():\n    # NOTE(gRPC Python Team): .close() is possible on a channel and should be\n    # used in circumstances in which the with statement does not fit the needs\n    # of the code.\n    with grpc.insecure_channel(\'localhost:50051\') as channel:\n        stub = message_pb2_grpc.GreeterStub(channel)\n        response = stub.SayHello(message_pb2.HelloRequest(name=\'you\'))\n    print("Greeter client received: " + response.message)\n\n\nif __name__ == \'__main__\':\n    logging.basicConfig()\n    run()']],["h2","\u542f\u52a8server\u7aef\u7b49\u5f85\u8fdc\u7a0b\u8c03\u7528"],["pre",{lang:null,highlighted:'python3 server<span class="token punctuation">.</span>py'},["code","python3 server.py"]],["h2","\u542f\u52a8\u5ba2\u6237\u7aef\u8c03\u7528\u8fdc\u7aef\u63a5\u53e3"],["pre",{lang:null,highlighted:'python3 client<span class="token punctuation">.</span>py\nGreeter client received<span class="token punctuation">:</span> Hello<span class="token punctuation">,</span> you!'},["code","python3 client.py\nGreeter client received: Hello, you!"]],["p",["a",{title:null,href:"https://github.com/JetQin/grpc_example.git"},"Github gRPC Example"]]],meta:{order:6,title:"gRPC \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/distribution/gRpc.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4ec0\u4e48\u662fgRPC",title:"\u4ec0\u4e48\u662fgRPC"},"\u4ec0\u4e48\u662fgRPC"]],["li",["a",{className:"bisheng-toc-h2",href:"#Protocol-Buffer",title:"Protocol Buffer"},"Protocol Buffer"]],["li",["a",{className:"bisheng-toc-h2",href:"#gRPC\u793a\u4f8b",title:"gRPC\u793a\u4f8b"},"gRPC\u793a\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8server\u7aef\u7b49\u5f85\u8fdc\u7a0b\u8c03\u7528",title:"\u542f\u52a8server\u7aef\u7b49\u5f85\u8fdc\u7a0b\u8c03\u7528"},"\u542f\u52a8server\u7aef\u7b49\u5f85\u8fdc\u7a0b\u8c03\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8\u5ba2\u6237\u7aef\u8c03\u7528\u8fdc\u7aef\u63a5\u53e3",title:"\u542f\u52a8\u5ba2\u6237\u7aef\u8c03\u7528\u8fdc\u7aef\u63a5\u53e3"},"\u542f\u52a8\u5ba2\u6237\u7aef\u8c03\u7528\u8fdc\u7aef\u63a5\u53e3"]]]}}});